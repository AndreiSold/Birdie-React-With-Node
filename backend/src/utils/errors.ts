export const throwAndLogError = (message: string, statusCode: number) => {
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

export const wrapRequestInExceptionHandler = async (
  req: any,
  res: any,
  requestHandler: (req: any, res: any) => void
) => {
  try {
    await requestHandler(req, res);
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Unknown error' });
  }
};
