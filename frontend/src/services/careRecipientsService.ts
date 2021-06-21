import { CareRecipient } from '../models/careRecipient';
import axios from 'axios';

class CareRecipientsService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getAllCareRecipients(): Promise<CareRecipient[]> {
    return (await axios.get(`${this.baseUrl}/care-recipients`)).data;
  }
}

export const careRecipientsService = new CareRecipientsService(
  process.env.REACT_APP_BACKEND_URL ?? ''
);
