import * as express from 'express';
import { getAllCareRecipients } from '../services/care-recipient';

export const careRecipientsController = express.Router();

careRecipientsController
  .get('/care-recipients', async (_req, res) => {
    try {
      const careRecipients = await getAllCareRecipients();
      res.status(200).json(careRecipients);
    } catch (error) {
      res
        .status(error.statusCode || 500)
        .json({ message: error.message || 'Unknown error' });
    }
  })
  .get('/care-recipients/:careRecipientId', (req, res) => {
    res.status(200).json({
      data: `Details regarding care recipient with id ${req.params.careRecipientId}`,
    });
  });
