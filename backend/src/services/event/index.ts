import { EventDto } from '../../dtos/event-dto';
import { Event } from '../../models/event.model';
import { MoodObservationDto } from '../../dtos/mood-observation-dto';
import { MoodObservationEntryDto } from '../../dtos/mood-observation-entry-dto';
import {
  SELECT_ALL_EVENTS_FOR_RECIPIENT_ID,
  SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID,
} from './queries';
import {
  mapEventsToEventDtos,
  mapMoodObservationEntryDtosToMoodObservationDtos,
} from './mapper';
import { executeQuery } from '../../database/repository';

export const getMoodObservationsForCareRecipientId = async (
  careRecipientId: string
): Promise<MoodObservationDto[]> => {
  const moodObservationEntryDtos: MoodObservationEntryDto[] =
    (await executeQuery(
      SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID.replace(
        ':careRecipientId',
        careRecipientId
      )
    )) as MoodObservationEntryDto[];

  return mapMoodObservationEntryDtosToMoodObservationDtos(
    moodObservationEntryDtos
  );
};

export const getEventsForCareRecipientId = async (
  careRecipientId: string
): Promise<EventDto[]> => {
  const events: Event[] = (await executeQuery(
    SELECT_ALL_EVENTS_FOR_RECIPIENT_ID.replace(
      ':careRecipientId',
      careRecipientId
    )
  )) as Event[];

  return mapEventsToEventDtos(events);
};
