import { Request, Response } from 'express';

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

export const wrapRequestProcessingInExceptionHandler = async (
  req: Request,
  res: Response,
  requestProcessingFunction: (req: any, res: any) => void
): Promise<void> => {
  try {
    await requestProcessingFunction(req, res);
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Unknown error' });
  }
};
