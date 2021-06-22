import { EventType } from '../enums/eventType';

export const getDescriptionForEventType = (eventType: EventType): string => {
  const updatedEventType = eventType.replaceAll('_', ' ');
  return updatedEventType.charAt(0).toUpperCase() + updatedEventType.slice(1);
};
