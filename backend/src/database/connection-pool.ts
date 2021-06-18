import * as mysql from 'mysql';
import { Pool } from 'mysql';

let databasePool: Pool;

export const getDatabasePool = (): Pool => {
  if (!databasePool) {
    databasePool = mysql.createPool({
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT || '3306'),
    });
  }
  return databasePool;
};
