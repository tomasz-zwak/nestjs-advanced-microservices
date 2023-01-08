import {
  databaseConfig,
  makeConnectionConfig,
} from 'apps/posts/src/database/database.config';
import { DataSource } from 'typeorm';

const config = databaseConfig();

export default new DataSource(makeConnectionConfig(config));
