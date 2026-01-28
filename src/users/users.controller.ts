import { Controller, Get, Param, Patch, Body, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {

  // GET /users  → ADMIN only
  @Get()
  @Roles('ADMIN')
  findAllUsers() {
    return 'List of all users (ADMIN only)';
  }

  // GET /users/:id → ADMIN only
  @Get(':id')
  @Roles('ADMIN')
  findUserById(@Param('id') id: string) {
    return `User with id ${id}`;
  }

  // PATCH /users/:id → ADMIN only (update role)
  @Patch(':id')
  @Roles('ADMIN')
  updateUserRole(
    @Param('id') id: string,
    @Body('role') role: 'ADMIN' | 'EMPLOYEE',
  ) {
    return {
      message: `Updated user ${id} role to ${role}`,
    };
  }
}