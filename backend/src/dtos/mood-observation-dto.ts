import { Mood } from '../enums/mood';

export interface MoodObservationDto {
  mood: Mood;
  timestamp: string;
}
