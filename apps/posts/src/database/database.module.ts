import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  databaseConfig,
  DatabaseConfigType,
  makeConnectionConfig,
} from 'apps/posts/src/database/database.config';
import { Post } from 'apps/posts/src/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory(config: DatabaseConfigType) {
        return {
          ...makeConnectionConfig(config),
          entities: [Post],
        };
      },
    }),
  ],
})
export class DatabaseModule {}
