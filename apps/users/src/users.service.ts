import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'apps/users/src/user.entity';
import { DeepPartial, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(entityLike: DeepPartial<User>) {
    const user = this.userRepository.create(entityLike);
    return this.userRepository.save(user);
  }

  findOne(options: FindOneOptions<User>) {
    return this.userRepository.findOne(options);
  }
}
