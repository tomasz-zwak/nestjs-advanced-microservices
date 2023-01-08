import { ConfigType, registerAs } from '@nestjs/config';
import path from 'path';
import type { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseConfig = registerAs('database', () => ({
  host: process.env.DB_POSTS_HOST ?? 'localhost',
  port: process.env.DB_POSTS_PORT ?? 5434,
  database: process.env.DB_POSTS_DATABASE ?? 'posts',
  username: process.env.DB_POSTS_USER ?? 'admin',
  password: process.env.DB_POSTS_PASSWORD,
}));

export type DatabaseConfigType = ConfigType<typeof databaseConfig>;

export const makeConnectionConfig = (
  config: DatabaseConfigType,
): DataSourceOptions => {
  return {
    type: 'postgres',
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    port: +config.port,
    migrations: [path.join(__dirname, 'migrations/*.{j,t}s')],
    entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
    namingStrategy: new SnakeNamingStrategy(),
  };
};
