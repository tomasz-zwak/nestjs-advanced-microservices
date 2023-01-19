import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserByLogin, UserDto } from 'apps/users/src/users';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UsersService', 'Create')
  async create(data: UserDto) {
    const user = await this.usersService.create({
      name: data.login,
      email: data.login,
    });
    console.log(user);
    return { id: user.id, login: user.email };
  }

  @GrpcMethod('UsersService', 'FindByLogin')
  async findByLogin(data: UserByLogin) {
    const user = await this.usersService.findOne({
      where: { email: data.login },
    });
    console.log(user);
    return { id: user?.id, login: user?.email };
  }
}
