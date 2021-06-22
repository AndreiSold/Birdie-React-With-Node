import axios from 'axios';
import { Event } from '../models/event';
import { MoodObservation } from '../models/moodObservation';
import { sleep } from '../utils/sleeper';

class EventsService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getAllEventsForCareRecipientId(
    careRecipientId: string
  ): Promise<Event[]> {
    await sleep(1000);
    return (
      await axios.get(
        `${this.baseUrl}/events/care-recipient/${careRecipientId}`
      )
    ).data;
  }

  async getAllMoodObservationsForCareRecipientId(
    careRecipientId: string
  ): Promise<MoodObservation[]> {
    await sleep(1000);
    return (
      await axios.get(
        `${this.baseUrl}/events/care-recipient/${careRecipientId}/mood-observations`
      )
    ).data;
  }
}

export const eventsService = new EventsService(
  process.env.REACT_APP_BACKEND_URL ?? ''
);
