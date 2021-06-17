import * as express from 'express';
import {
  getAllCareRecipients,
  getMoodObservationsForCareRecipientId,
} from '../services/care-recipient';

export const careRecipientsController = express.Router();
const careRecipientsBasePath = '/care-recipients';

careRecipientsController
  .get(careRecipientsBasePath, async (_req, res) => {
    try {
      const careRecipients = await getAllCareRecipients();
      res.status(200).json(careRecipients);
    } catch (error) {
      res
        .status(error.statusCode || 500)
        .json({ message: error.message || 'Unknown error' });
    }
  })
  .get(
    `${careRecipientsBasePath}/:careRecipientId/mood-observations`,
    async (req, res) => {
      try {
        const moods = await getMoodObservationsForCareRecipientId(
          req.params.careRecipientId
        );
        res.status(200).json(moods);
      } catch (error) {
        res
          .status(error.statusCode || 500)
          .json({ message: error.message || 'Unknown error' });
      }
    }
  );
