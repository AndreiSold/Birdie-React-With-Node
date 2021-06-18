import { EventDto } from '../../dtos/event-dto';
import { Event } from '../../models/event.model';
import { MoodObservationDto } from '../../dtos/mood-observation-dto';
import { MoodObservationEntryDto } from '../../dtos/mood-observation-entry-dto';
import { Mood } from '../../enums/mood';
import { generateMessageForEventType } from '../../utils/event-type-processing';

export const mapMoodObservationEntryDtosToMoodObservationDtos = (
  moodObservationEntryDtos: MoodObservationEntryDto[]
): MoodObservationDto[] => {
  const moodObservations: MoodObservationDto[] = [];

  for (const entry of moodObservationEntryDtos) {
    moodObservations.push({
      timestamp: entry.timestamp,
      mood: (JSON.parse(entry.payload) as any).mood as Mood,
      eventId: entry.id,
    });
  }

  return moodObservations;
};

export const mapEventsToEventDtos = (events: Event[]): EventDto[] => {
  const eventDtos: EventDto[] = [];

  for (const entry of events) {
    eventDtos.push({
      id: entry.id,
      eventType: entry.event_type,
      message: generateMessageForEventType(entry.event_type, entry.payload),
      timestamp: entry.timestamp,
    });
  }

  return eventDtos;
};
