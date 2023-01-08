import { PickType } from '@nestjs/swagger';
import { User } from 'apps/users/src/user.entity';

export class CreateUserDto extends PickType(User, ['name', 'email']) {}

export class UpdateUserDto extends PickType(User, ['name', 'email']) {}
