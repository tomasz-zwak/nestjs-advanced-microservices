import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from 'apps/posts/src/post.dto';
import { Post } from 'apps/posts/src/post.entity';
import { User } from 'apps/users/src/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(userId: User['id']) {
    const posts = await this.postRepository.find({
      where: { user_id: userId },
      select: { id: true, content: true },
    });

    // nested to conform grpc schema
    return { posts };
  }

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(createPostDto);
    return this.postRepository.save(post);
  }

  delete(id: Post['id']) {
    return this.postRepository.delete(id);
  }
}
