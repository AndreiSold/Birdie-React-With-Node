import { Server } from 'http';
import supertest from 'supertest';
import app from './application';
import * as repository from './database/repository';
import * as nameGenerator from './utils/name-generator';
import { CareRecipientIdDto } from './dtos/care-recipient-id-dto';
import { MoodObservationEntryDto } from './dtos/mood-observation-entry-dto';
import { Mood } from './enums/mood';
import { Event } from './models/event.model';
import { EventType } from './enums/event-type';

const PORT = 8001;
let appInstance: Server;

beforeAll(() => {
  appInstance = app.listen(PORT);
});

afterAll(() => {
  appInstance.close();
});

beforeEach(() => {
  jest.resetAllMocks();
});

const mockCareRecipientId = 'mockCareRecipientId';
const mockEventId = 'mockEventId';
const mockFullName = 'Andrei Sold';
const mockMood = Mood.HAPPY;
const mockEventType = EventType.MOOD_OBSERVATION;
const mockErrorMessage = 'Mock error message';
const mockTimestamp = '2020-05-12T09:05:02.004Z';
const mockPayload = JSON.stringify({ mood: mockMood });
const mockCareRecipientIds: CareRecipientIdDto[] = [
  {
    care_recipient_id: mockCareRecipientId,
  },
];
const moodObservationEntryDtos: MoodObservationEntryDto[] = [
  {
    timestamp: mockTimestamp,
    payload: mockPayload,
    id: mockEventId,
  },
];
const mockEvents: Event[] = [
  {
    id: mockEventId,
    timestamp: mockTimestamp,
    event_type: mockEventType,
    payload: mockPayload,
    payload_as_text: mockPayload,
    care_recipient_id: mockCareRecipientId,
  },
];

test('GET 200 /care-recipients', async () => {
  jest
    .spyOn(repository, 'executeQuery')
    .mockReturnValue(Promise.resolve(mockCareRecipientIds));

  jest
    .spyOn(nameGenerator, 'generateRandomFullName')
    .mockReturnValue(mockFullName);

  await supertest(app)
    .get('/care-recipients')
    .expect(200)
    .then((response: any) => {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);
      expect(response.body[0]).toEqual({
        id: mockCareRecipientIds[0].care_recipient_id,
        fullName: mockFullName,
      });
    });
});

test('GET 500 /care-recipients', async () => {
  jest.spyOn(repository, 'executeQuery').mockImplementation(() => {
    throw new Error(mockErrorMessage);
  });

  await supertest(app)
    .get('/care-recipients')
    .expect(500)
    .then((response: any) => {
      expect(response.body.message).toEqual(mockErrorMessage);
    });
});

test('GET 200 /events/care-recipient/:careRecipientId/mood-observations', async () => {
  jest
    .spyOn(repository, 'executeQuery')
    .mockReturnValue(Promise.resolve(moodObservationEntryDtos));

  await supertest(app)
    .get(`/events/care-recipient/${mockCareRecipientId}/mood-observations`)
    .expect(200)
    .then((response: any) => {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);
      expect(response.body[0]).toEqual({
        timestamp: moodObservationEntryDtos[0].timestamp,
        mood: mockMood,
        eventId: mockEventId,
      });
    });
});

test('GET 200 /events/care-recipient/:careRecipientId', async () => {
  jest
    .spyOn(repository, 'executeQuery')
    .mockReturnValue(Promise.resolve(mockEvents));

  await supertest(app)
    .get(`/events/care-recipient/${mockCareRecipientId}`)
    .expect(200)
    .then((response: any) => {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);
      expect(response.body[0]).toEqual({
        timestamp: mockEvents[0].timestamp,
        id: mockEventId,
        eventType: mockEvents[0].event_type,
        message: `Mood: '${mockMood}'`,
      });
    });
});
