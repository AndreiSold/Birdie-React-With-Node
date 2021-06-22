import { EventType } from '../enums/eventType';

export interface Event {
  id: string;
  eventType: EventType;
  message: string;
  timestamp: string;
}
