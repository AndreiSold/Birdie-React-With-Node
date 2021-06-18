import * as express from 'express';
import { CareRecipientDto } from '../dtos/care-recipient-dto';
import { getAllCareRecipients } from '../services/care-recipient';
import { handleError } from '../utils/errors';

export const careRecipientsController = express.Router();
const careRecipientsBasePath = '/care-recipients';

careRecipientsController.get(careRecipientsBasePath, (_req, res) => {
  void (async (): Promise<void> => {
    try {
      const careRecipients: CareRecipientDto[] = await getAllCareRecipients();
      res.status(200).json(careRecipients);
    } catch (error) {
      handleError(res, error);
    }
  })();
});
