import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    // Normally you’d validate user credentials here
    // We’ll mock it for now

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = {
      userId: user.id,
      role: user.role,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
