import { Response } from 'express';

export const throwAndLogError = (message: string, statusCode: number): void => {
  /* eslint-disable no-console */
  console.error(message);
  throw new HTTPError(message, statusCode);
};

export class HTTPError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleError = (res: Response, error: Error | HTTPError): void => {
  res
    .status((error as any).statusCode || 500)
    .json({ message: error.message || 'Unknown error' });
};
