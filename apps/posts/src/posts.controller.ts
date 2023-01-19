import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PostById, PostDto, UserId } from 'apps/posts/src/posts';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @GrpcMethod('PostsService', 'Create')
  async create(data: PostDto) {
    return this.postsService.create({
      content: data.content,
      user_id: data.userId,
    });
  }

  @GrpcMethod('PostsService', 'FindAll')
  async findAll(data: UserId) {
    console.log('userid', data);
    return this.postsService.findAll(data.id);
  }

  @GrpcMethod('PostsService', 'Delete')
  async delete(data: PostById) {
    return this.postsService.delete(data.id);
  }
}
