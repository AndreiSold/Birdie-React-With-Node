import * as express from 'express';

export const careRecipientController = express.Router();

careRecipientController
  .get('/care-recipients', (_req, res) => {
    res.status(200).json({ data: 'A list of all care recipients' });
  })
  .get('/care-recipients/:careRecipientId', (req, res) => {
    res.status(200).json({
      data: `Details regarding care recipient with id ${req.params.careRecipientId}`,
    });
  });
