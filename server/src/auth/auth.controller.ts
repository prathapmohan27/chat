import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guard/local-auth/local-auth.guard';
import { JwtData, Token } from './interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Public } from 'src/utils/decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @Public()
  async login(@Req() req: Request): Promise<Token> {
    if (!req.user) {
      throw new Error('User not found in request');
    }
    const { id, email } = req.user as JwtData;
    return this.authService.login({ id, email });
  }
  @Post('signup')
  @Public()
  async signup(
    @Body()
    data: CreateUserDto,
  ): Promise<Token> {
    return this.authService.signup(data);
  }
}
