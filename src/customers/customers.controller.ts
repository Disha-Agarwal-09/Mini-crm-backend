import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('customers')
@UseGuards(JwtAuthGuard)
export class CustomersController {

  // ADMIN + EMPLOYEE
  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return { page, limit };
  }

  // ADMIN only
  @Post()
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  create(@Body() body: any) {
    return body;
  }
}