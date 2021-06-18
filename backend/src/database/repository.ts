import { getDatabasePool } from './connection-pool';
import { throwAndLogError } from '../utils/errors';

export const executeQuery = async (query: string): Promise<any> => {
  const databasePool = getDatabasePool();

  try {
    return await new Promise((resolve, reject) => {
      databasePool.query(query, (error, results) => {
        if (error) {
          reject(
            `An error occurred while trying to query the database: ${error.message}`
          );
        } else {
          resolve(results);
        }
      });
    });
  } catch (errorMessage) {
    throwAndLogError(errorMessage, 500);
  }
};
