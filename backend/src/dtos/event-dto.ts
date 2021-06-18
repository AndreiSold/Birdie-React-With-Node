import { EventType } from '../enums/event-type';

export interface EventDto {
  id: string;
  eventType: EventType;
  message: string;
  timestamp: string;
}
