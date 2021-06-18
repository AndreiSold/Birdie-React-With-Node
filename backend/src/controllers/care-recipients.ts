import * as express from 'express';
import { CareRecipientDto } from '../dtos/care-recipient-dto';
import { EventDto } from '../dtos/event-dto';
import { MoodObservationDto } from '../dtos/mood-observation-dto';
import {
  getAllCareRecipients,
  getEventsForCareRecipientId,
  getMoodObservationsForCareRecipientId,
} from '../services/care-recipient';
import { wrapRequestInExceptionHandler } from '../utils/errors';

export const careRecipientsController = express.Router();
const careRecipientsBasePath = '/care-recipients';

careRecipientsController
  .get(careRecipientsBasePath, async (req, res) => {
    await wrapRequestInExceptionHandler(
      req,
      res,
      async (_req: any, res: any) => {
        const careRecipients: CareRecipientDto[] = await getAllCareRecipients();
        res.status(200).json(careRecipients);
      }
    );
  })
  .get(
    `${careRecipientsBasePath}/:careRecipientId/mood-observations`,
    async (req, res) => {
      await wrapRequestInExceptionHandler(
        req,
        res,
        async (req: any, res: any) => {
          const moods: MoodObservationDto[] =
            await getMoodObservationsForCareRecipientId(
              req.params.careRecipientId
            );
          res.status(200).json(moods);
        }
      );
    }
  )
  .get(
    `${careRecipientsBasePath}/:careRecipientId/events`,
    async (req, res) => {
      await wrapRequestInExceptionHandler(
        req,
        res,
        async (req: any, res: any) => {
          const events: EventDto[] = await getEventsForCareRecipientId(
            req.params.careRecipientId
          );
          res.status(200).json(events);
        }
      );
    }
  );
