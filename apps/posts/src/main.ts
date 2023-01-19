import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PostsModule } from 'apps/posts/src/posts.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostsModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'posts',
        protoPath: join(__dirname, 'posts.proto'),
        url: 'localhost:5001',
      },
    },
  );

  await app.listen();
}
bootstrap();
