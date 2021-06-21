import { Mood } from '../enums/mood';

export interface MoodObservation {
  mood: Mood;
  timestamp: string;
  eventId: string;
}
