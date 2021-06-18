import { CareRecipientDto } from '../../dtos/care-recipient-dto';
import { CareRecipientIdDto } from '../../dtos/care-recipient-id-dto';
import { EventDto } from '../../dtos/event-dto';
import { Event } from '../../models/event.model';
import { MoodObservationDto } from '../../dtos/mood-observation-dto';
import { MoodObservationEntryDto } from '../../dtos/mood-observation-entry-dto';
import {
  SELECT_ALL_CARE_RECIPIENTS_IDS,
  SELECT_ALL_EVENTS_FOR_RECIPIENT_ID,
  SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID,
} from './queries';
import { executeQuery } from './repository';
import {
  mapCareRecipientIdDtosToCareRecipientDtos,
  mapEventsToEventDtos,
  mapMoodObservationEntryDtosToMoodObservationDtos,
} from './mapper';

export const getAllCareRecipients = async (): Promise<CareRecipientDto[]> => {
  const careRecipientIdDtos: CareRecipientIdDto[] = (await executeQuery(
    SELECT_ALL_CARE_RECIPIENTS_IDS
  )) as CareRecipientIdDto[];

  return mapCareRecipientIdDtosToCareRecipientDtos(careRecipientIdDtos);
};

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
