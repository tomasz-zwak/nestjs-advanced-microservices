import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User } from 'apps/users/src/user.entity';
import { OptionalUser, UserByLogin, UsersService } from 'apps/users/src/users';
import { lastValueFrom, Observable } from 'rxjs';

@Controller()
export class UsersGatewayController implements OnModuleInit {
  private usersService: UsersService;
  constructor(
    @Inject('USERS_PACKAGE') private readonly usersClient: ClientGrpc,
  ) {
    console.log(usersClient);
  }

  onModuleInit() {
    this.usersService =
      this.usersClient.getService<UsersService>('UsersService');
  }

  @Post('login')
  async login(@Body() data: UserByLogin) {
    const user = await lastValueFrom(
      this.usersService.FindByLogin(data) as unknown as Observable<User>,
    );
    console.log(user);
    if (!Object.keys(user).length) {
      const createdUser = await lastValueFrom(
        this.usersService.Create(data) as unknown as Observable<User>,
      );
      console.log(createdUser);
      return createdUser;
    }

    return user;
  }
}
