import { NestFactory } from '@nestjs/core';
import { PostsModule } from 'apps/posts/src/posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  await app.listen(3334);
}
bootstrap();
