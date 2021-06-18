import * as express from 'express';
import { CareRecipientDto } from '../dtos/care-recipient-dto';
import { getAllCareRecipients } from '../services/care-recipient';
import { wrapRequestProcessingInExceptionHandler } from '../utils/errors';

export const careRecipientsController = express.Router();
const careRecipientsBasePath = '/care-recipients';

careRecipientsController.get(careRecipientsBasePath, async (req, res) => {
  await wrapRequestProcessingInExceptionHandler(
    req,
    res,
    async (_req: any, res: any) => {
      const careRecipients: CareRecipientDto[] = await getAllCareRecipients();
      res.status(200).json(careRecipients);
    }
  );
});
