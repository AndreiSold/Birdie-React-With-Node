import { CareRecipientDto } from '../../dtos/care-recipient-dto';
import { CareRecipientIdDto } from '../../dtos/care-recipient-id-dto';
import { SELECT_ALL_CARE_RECIPIENTS_IDS } from './queries';
import { executeQuery } from '../../database/repository';
import { mapCareRecipientIdDtosToCareRecipientDtos } from './mapper';

export const getAllCareRecipients = async (): Promise<CareRecipientDto[]> => {
  const careRecipientIdDtos: CareRecipientIdDto[] = (await executeQuery(
    SELECT_ALL_CARE_RECIPIENTS_IDS
  )) as CareRecipientIdDto[];

  return mapCareRecipientIdDtosToCareRecipientDtos(careRecipientIdDtos);
};
