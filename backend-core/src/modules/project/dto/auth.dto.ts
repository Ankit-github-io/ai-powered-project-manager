import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail({}, { message: 'Please provide a valid email address' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password!: string;
}

export class SignInDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email!: string;

  @IsString()
  password!: string;
}
