import { CareRecipientDto } from '../../dtos/care-recipient-dto';
import { CareRecipientIdDto } from '../../dtos/care-recipient-id-dto';
import { generateRandomFullName } from '../../utils/name-generator';

export const mapCareRecipientIdDtosToCareRecipientDtos = (
  careRecipientIdDtos: CareRecipientIdDto[]
): CareRecipientDto[] => {
  const careRecipients: CareRecipientDto[] = [];

  for (const entry of careRecipientIdDtos) {
    careRecipients.push({
      id: entry.care_recipient_id,
      fullName: generateRandomFullName(),
    });
  }

  return careRecipients;
};
