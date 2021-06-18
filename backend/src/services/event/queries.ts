export const SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID = `
  SELECT e.timestamp, e.payload, e.id 
  FROM events e 
  WHERE care_recipient_id=':careRecipientId' 
    AND event_type="mood_observation" 
  ORDER BY timestamp ASC;`;

export const SELECT_ALL_EVENTS_FOR_RECIPIENT_ID = `
  SELECT * 
  FROM events 
  WHERE care_recipient_id=':careRecipientId' 
  ORDER BY timestamp ASC;
`;
