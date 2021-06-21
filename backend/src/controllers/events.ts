import * as express from 'express';
import { EventDto } from '../dtos/event-dto';
import { MoodObservationDto } from '../dtos/mood-observation-dto';
import {
  getEventsForCareRecipientId,
  getMoodObservationsForCareRecipientId,
} from '../services/event';
import { handleError } from '../utils/errors';

export const eventsController = express.Router();
const eventsBasePath = '/events';

eventsController
  .get(
    `${eventsBasePath}/care-recipient/:careRecipientId/mood-observations`,
    (req, res) => {
      void (async (): Promise<void> => {
        try {
          const moods: MoodObservationDto[] =
            await getMoodObservationsForCareRecipientId(
              req.params.careRecipientId
            );
          res.status(200).json(moods);
        } catch (error) {
          handleError(res, error);
        }
      })();
    }
  )
  .get(`${eventsBasePath}/care-recipient/:careRecipientId`, (req, res) => {
    void (async (): Promise<void> => {
      try {
        const events: EventDto[] = await getEventsForCareRecipientId(
          req.params.careRecipientId
        );
        res.status(200).json(events);
      } catch (error) {
        handleError(res, error);
      }
    })();
  });
