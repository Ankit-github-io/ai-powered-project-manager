import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService, AuthResponse } from './auth.service';
import { SignUpDto, SignInDto } from '../project/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignUpDto): Promise<AuthResponse> {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signin(@Body() dto: SignInDto): Promise<AuthResponse> {
    return this.authService.signin(dto);
  }
}
