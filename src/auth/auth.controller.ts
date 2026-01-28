import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    // temporary mock user
    const user = {
      id: 1,
      role: 'USER',
    };

    return this.authService.login(user);
  }
}
