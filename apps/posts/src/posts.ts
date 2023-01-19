/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "posts";

export interface PostDto {
  content: string;
  userId: number;
}

export interface PostById {
  id: number;
}

export interface Post {
  id: number;
  content: string;
}

export interface Posts {
  posts: Post[];
}

export interface UserId {
  id: number;
}

function createBasePostDto(): PostDto {
  return { content: "", userId: 0 };
}

export const PostDto = {
  encode(message: PostDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== "") {
      writer.uint32(10).string(message.content);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.string();
          break;
        case 2:
          message.userId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostDto {
    return {
      content: isSet(object.content) ? String(object.content) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: PostDto): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<PostDto>, I>>(base?: I): PostDto {
    return PostDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostDto>, I>>(object: I): PostDto {
    const message = createBasePostDto();
    message.content = object.content ?? "";
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBasePostById(): PostById {
  return { id: 0 };
}

export const PostById = {
  encode(message: PostById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostById {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostById();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostById {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: PostById): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<PostById>, I>>(base?: I): PostById {
    return PostById.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostById>, I>>(object: I): PostById {
    const message = createBasePostById();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBasePost(): Post {
  return { id: 0, content: "" };
}

export const Post = {
  encode(message: Post, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Post {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      content: isSet(object.content) ? String(object.content) : "",
    };
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  create<I extends Exact<DeepPartial<Post>, I>>(base?: I): Post {
    return Post.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Post>, I>>(object: I): Post {
    const message = createBasePost();
    message.id = object.id ?? 0;
    message.content = object.content ?? "";
    return message;
  },
};

function createBasePosts(): Posts {
  return { posts: [] };
}

export const Posts = {
  encode(message: Posts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Posts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Posts {
    return { posts: Array.isArray(object?.posts) ? object.posts.map((e: any) => Post.fromJSON(e)) : [] };
  },

  toJSON(message: Posts): unknown {
    const obj: any = {};
    if (message.posts) {
      obj.posts = message.posts.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.posts = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Posts>, I>>(base?: I): Posts {
    return Posts.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Posts>, I>>(object: I): Posts {
    const message = createBasePosts();
    message.posts = object.posts?.map((e) => Post.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserId(): UserId {
  return { id: 0 };
}

export const UserId = {
  encode(message: UserId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserId {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: UserId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserId>, I>>(base?: I): UserId {
    return UserId.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserId>, I>>(object: I): UserId {
    const message = createBaseUserId();
    message.id = object.id ?? 0;
    return message;
  },
};

export interface PostsService {
  Create(request: PostDto): Promise<Post>;
  Delete(request: PostById): Promise<Post>;
  FindOne(request: PostById): Promise<Post>;
  FindAll(request: UserId): Promise<Posts>;
}

export class PostsServiceClientImpl implements PostsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "posts.PostsService";
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Delete = this.Delete.bind(this);
    this.FindOne = this.FindOne.bind(this);
    this.FindAll = this.FindAll.bind(this);
  }
  Create(request: PostDto): Promise<Post> {
    const data = PostDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => Post.decode(new _m0.Reader(data)));
  }

  Delete(request: PostById): Promise<Post> {
    const data = PostById.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delete", data);
    return promise.then((data) => Post.decode(new _m0.Reader(data)));
  }

  FindOne(request: PostById): Promise<Post> {
    const data = PostById.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOne", data);
    return promise.then((data) => Post.decode(new _m0.Reader(data)));
  }

  FindAll(request: UserId): Promise<Posts> {
    const data = UserId.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindAll", data);
    return promise.then((data) => Posts.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
