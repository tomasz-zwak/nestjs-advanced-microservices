import { PickType } from '@nestjs/swagger';
import { Post } from 'apps/posts/src/post.entity';

export class CreatePostDto extends PickType(Post, ['content', 'user_id']) {}

export class UpdatePostDto extends CreatePostDto {}
