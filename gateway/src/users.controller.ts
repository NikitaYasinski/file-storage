import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto } from './dto/users/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USERS_SERVICE') private readonly usersClient: ClientProxy,
  ) {}

  @Post()
  public async createUser(@Body() dto: CreateUserDto) {
    const response = await firstValueFrom(
      this.usersClient.send({ cmd: 'create_user' }, dto),
    );
    return response;
  }
}
