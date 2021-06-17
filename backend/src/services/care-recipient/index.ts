import { CareRecipientDto } from '../../dtos/care-recipient-dto';
import { CareRecipientIdDto } from '../../dtos/care-recipient-id-dto';
import { generateRandomFullName } from '../../utils/name-generator';
import { SELECT_ALL_CARE_RECIPIENTS_IDS } from './queries';
import { executeQuery } from './repository';

export const getAllCareRecipients = async (): Promise<CareRecipientDto[]> => {
  const results: CareRecipientIdDto[] = (await executeQuery(
    SELECT_ALL_CARE_RECIPIENTS_IDS
  )) as CareRecipientIdDto[];

  const careRecipientDtos: CareRecipientDto[] = [];
  for (const result of results) {
    careRecipientDtos.push({
      id: result.care_recipient_id,
      fullName: generateRandomFullName(),
    });
  }

  return careRecipientDtos;
};
