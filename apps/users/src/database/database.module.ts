import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  databaseConfig,
  DatabaseConfigType,
  makeConnectionConfig,
} from 'apps/users/src/database/database.config';
import { User } from 'apps/users/src/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory(config: DatabaseConfigType) {
        return {
          ...makeConnectionConfig(config),
          entities: [User],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
