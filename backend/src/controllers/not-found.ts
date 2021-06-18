import * as express from 'express';

export const notFoundController = express.Router();

notFoundController.all('*', (req, res) => {
  res.status(404).json({
    message: `There is no prepared endpoint having the path ${req.originalUrl} and HTTP method ${req.method}.`,
  });
});
