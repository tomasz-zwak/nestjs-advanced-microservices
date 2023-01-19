import {
  Body,
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PostDto, PostsService } from 'apps/posts/src/posts';
import { Request } from 'express';

// install protoc and use ts-proto lib to generate types
// protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --experimental_allow_proto3_optional --ts_proto_out=. ./apps/users/src/users.proto

@Controller()
export class PostsGatewayController implements OnModuleInit {
  private postsService: PostsService;
  constructor(
    @Inject('POSTS_PACKAGE') private readonly postsClient: ClientGrpc,
  ) {
    console.log(postsClient);
  }

  onModuleInit() {
    this.postsService =
      this.postsClient.getService<PostsService>('PostsService');
  }

  @Get('posts')
  async posts(@Req() req: Request) {
    const id = parseInt(req.headers['userid'] as string);
    return this.postsService.FindAll({
      id,
    });
  }

  @Post('posts/create')
  createPost(@Body() data: PostDto) {
    console.log(data);
    return this.postsService.Create(data);
  }

  @Post('posts/delete/:id')
  deletePost(@Param('id') id: number) {
    return this.postsService.Delete({ id });
  }
}
