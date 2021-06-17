import { CareRecipientDto } from '../../dtos/care-recipient-dto';
import { CareRecipientIdDto } from '../../dtos/care-recipient-id-dto';
import { MoodObservationDto } from '../../dtos/mood-observation-dto';
import { MoodObservationEntryDto } from '../../dtos/mood-observation-entry-dto';
import { Mood } from '../../enums/mood';
import { generateRandomFullName } from '../../utils/name-generator';
import {
  SELECT_ALL_CARE_RECIPIENTS_IDS,
  SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID,
} from './queries';
import { executeQuery } from './repository';

export const getAllCareRecipients = async (): Promise<CareRecipientDto[]> => {
  const results: CareRecipientIdDto[] = (await executeQuery(
    SELECT_ALL_CARE_RECIPIENTS_IDS
  )) as CareRecipientIdDto[];

  const careRecipients: CareRecipientDto[] = [];
  for (const result of results) {
    careRecipients.push({
      id: result.care_recipient_id,
      fullName: generateRandomFullName(),
    });
  }

  return careRecipients;
};

export const getMoodObservationsForCareRecipientId = async (
  careRecipientId: string
): Promise<MoodObservationDto[]> => {
  const results: MoodObservationEntryDto[] = (await executeQuery(
    SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID.replace(
      ':careRecipientId',
      careRecipientId
    )
  )) as MoodObservationEntryDto[];

  const moodObservations: MoodObservationDto[] = [];
  for (const result of results) {
    moodObservations.push({
      timestamp: result.timestamp,
      mood: (JSON.parse(result.payload) as any).mood as Mood,
    });
  }

  return moodObservations;
};
