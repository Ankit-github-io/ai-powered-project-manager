import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignUpDto, SignInDto } from '../project/dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

export interface AuthUserResponse {
  id: string;
  name: string | null;
  email: string;
}

export interface AuthResponse {
  accessToken: string;
  user: AuthUserResponse;
  defaultWorkspaceId?: string;
}

interface WorkspaceCreateData {
  name: string;
  slug: string;
  members: {
    create: {
      userId: string;
      role: 'OWNER';
    };
  };
}

interface PrismaWorkspaceDelegate {
  create(args: { data: WorkspaceCreateData }): Promise<{ id: string }>;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(dto: SignUpDto): Promise<AuthResponse> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingUser) {
        throw new BadRequestException('User with this email already exists.');
      }

      const hashedPassword = await bcrypt.hash(dto.password, 10);

      const user: AuthUserResponse = await this.prisma.user.create({
        data: {
          name: dto.name ?? null,
          email: dto.email,
          password: hashedPassword,
        },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      const workspaceName = `${dto.name ?? 'My'}'s Workspace`;
      const workspaceSlug = `workspace-${user.id.toLowerCase().slice(-6)}`;

      // Explicit type casting to avoid unsafe 'any' or missing property delegates
      const workspaceDelegate = (
        this.prisma as unknown as { workspace: PrismaWorkspaceDelegate }
      ).workspace;

      const workspace = await workspaceDelegate.create({
        data: {
          name: workspaceName,
          slug: workspaceSlug,
          members: {
            create: {
              userId: user.id,
              role: 'OWNER',
            },
          },
        },
      });

      const payload = { sub: user.id, email: user.email };
      const accessToken = this.jwtService.sign(payload);

      return {
        accessToken,
        user,
        defaultWorkspaceId: workspace.id,
      };
    } catch (error: unknown) {
      if (
        error instanceof BadRequestException ||
        error instanceof UnauthorizedException
      ) {
        throw error;
      }

      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unknown internal error occurred during signup';
      throw new InternalServerErrorException(errorMessage);
    }
  }

  async signin(dto: SignInDto): Promise<AuthResponse> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
        },
      });

      if (!user || !user.password) {
        throw new UnauthorizedException('Invalid credentials.');
      }

      const isPasswordValid = await bcrypt.compare(dto.password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials.');
      }

      const payload = { sub: user.id, email: user.email };
      const accessToken = this.jwtService.sign(payload);

      return {
        accessToken,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      };
    } catch (error: unknown) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unknown internal error occurred during signin';
      throw new InternalServerErrorException(errorMessage);
    }
  }
}
