import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './common/decorators/roles.decorator';
import { RolesGuard } from './common/guards/roles.guard';

@Controller()
export class AppController {

  @Get('protected')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  getProtected() {
    return { message: 'Admin access granted 🚀' };
  }
}
