import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    const data = { id: +id };
    return this.usersService.findOne(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const data = {
      where: { id: +id },
      data: updateUserDto,
    };
    return this.usersService.update(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const data = { id: +id };
    return this.usersService.remove(data);
  }
}
