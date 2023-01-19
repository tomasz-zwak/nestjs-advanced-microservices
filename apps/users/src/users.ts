/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "users";

export interface UserDto {
  login: string;
}

export interface UserById {
  id: number;
}

export interface UserByLogin {
  login: string;
}

export interface User {
  id: number;
  login: string;
}

export interface OptionalUser {
  user?: User | undefined;
}

function createBaseUserDto(): UserDto {
  return { login: "" };
}

export const UserDto = {
  encode(message: UserDto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.login = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserDto {
    return { login: isSet(object.login) ? String(object.login) : "" };
  },

  toJSON(message: UserDto): unknown {
    const obj: any = {};
    message.login !== undefined && (obj.login = message.login);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserDto>, I>>(base?: I): UserDto {
    return UserDto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserDto>, I>>(object: I): UserDto {
    const message = createBaseUserDto();
    message.login = object.login ?? "";
    return message;
  },
};

function createBaseUserById(): UserById {
  return { id: 0 };
}

export const UserById = {
  encode(message: UserById, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserById {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserById();
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

  fromJSON(object: any): UserById {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: UserById): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  create<I extends Exact<DeepPartial<UserById>, I>>(base?: I): UserById {
    return UserById.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserById>, I>>(object: I): UserById {
    const message = createBaseUserById();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseUserByLogin(): UserByLogin {
  return { login: "" };
}

export const UserByLogin = {
  encode(message: UserByLogin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.login !== "") {
      writer.uint32(10).string(message.login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserByLogin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserByLogin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.login = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserByLogin {
    return { login: isSet(object.login) ? String(object.login) : "" };
  },

  toJSON(message: UserByLogin): unknown {
    const obj: any = {};
    message.login !== undefined && (obj.login = message.login);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserByLogin>, I>>(base?: I): UserByLogin {
    return UserByLogin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserByLogin>, I>>(object: I): UserByLogin {
    const message = createBaseUserByLogin();
    message.login = object.login ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: 0, login: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.login !== "") {
      writer.uint32(18).string(message.login);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.login = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    return { id: isSet(object.id) ? Number(object.id) : 0, login: isSet(object.login) ? String(object.login) : "" };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.login !== undefined && (obj.login = message.login);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? 0;
    message.login = object.login ?? "";
    return message;
  },
};

function createBaseOptionalUser(): OptionalUser {
  return { user: undefined };
}

export const OptionalUser = {
  encode(message: OptionalUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionalUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OptionalUser {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: OptionalUser): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<OptionalUser>, I>>(base?: I): OptionalUser {
    return OptionalUser.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OptionalUser>, I>>(object: I): OptionalUser {
    const message = createBaseOptionalUser();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

export interface UsersService {
  Create(request: UserDto): Promise<User>;
  FindOne(request: UserById): Promise<OptionalUser>;
  FindByLogin(request: UserByLogin): Promise<User>;
}

export class UsersServiceClientImpl implements UsersService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "users.UsersService";
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.FindOne = this.FindOne.bind(this);
    this.FindByLogin = this.FindByLogin.bind(this);
  }
  Create(request: UserDto): Promise<User> {
    const data = UserDto.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => User.decode(new _m0.Reader(data)));
  }

  FindOne(request: UserById): Promise<OptionalUser> {
    const data = UserById.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindOne", data);
    return promise.then((data) => OptionalUser.decode(new _m0.Reader(data)));
  }

  FindByLogin(request: UserByLogin): Promise<User> {
    const data = UserByLogin.encode(request).finish();
    const promise = this.rpc.request(this.service, "FindByLogin", data);
    return promise.then((data) => User.decode(new _m0.Reader(data)));
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
