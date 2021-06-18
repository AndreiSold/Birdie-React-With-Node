import * as express from 'express';
import { EventDto } from '../dtos/event-dto';
import { MoodObservationDto } from '../dtos/mood-observation-dto';
import {
  getEventsForCareRecipientId,
  getMoodObservationsForCareRecipientId,
} from '../services/event';
import { wrapRequestInExceptionHandler } from '../utils/errors';

export const eventsController = express.Router();
const eventsBasePath = '/events';

eventsController
  .get(
    `${eventsBasePath}/care-recipient/:careRecipientId/moods`,
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
    `${eventsBasePath}/care-recipient/:careRecipientId`,
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
