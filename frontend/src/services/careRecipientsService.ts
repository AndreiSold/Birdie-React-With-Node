import { CareRecipient } from '../models/careRecipient';
import axios from 'axios';
import { sleep } from '../utils/sleeper';

class CareRecipientsService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getAllCareRecipients(): Promise<CareRecipient[]> {
    await sleep(1000);
    return (await axios.get(`${this.baseUrl}/care-recipients`)).data;
  }
}

export const careRecipientsService = new CareRecipientsService(
  process.env.REACT_APP_BACKEND_URL ?? ''
);
