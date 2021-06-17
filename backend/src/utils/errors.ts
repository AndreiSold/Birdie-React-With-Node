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
