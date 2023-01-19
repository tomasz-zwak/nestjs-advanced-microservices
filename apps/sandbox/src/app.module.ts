import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DatabaseModule } from 'apps/sandbox/src/database/database.module';
import { PostsGatewayController } from './posts-gateway.controller';
import { UsersGatewayController } from 'apps/sandbox/src/users-gateway.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'POSTS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'posts',
          protoPath: 'dist/apps/posts/posts.proto',
          url: 'localhost:5001',
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'USERS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: 'dist/apps/users/users.proto',
        },
      },
    ]),
  ],
  controllers: [PostsGatewayController, UsersGatewayController],
})
export class AppModule {}
