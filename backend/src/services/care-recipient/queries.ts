export const SELECT_ALL_CARE_RECIPIENTS_IDS = `SELECT DISTINCT e.care_recipient_id FROM events e;`;

export const SELECT_ALL_MOOD_OBSERVATIONS_FOR_RECIPIENT_ID = `
  SELECT e.timestamp, e.payload 
  FROM events e 
  WHERE care_recipient_id=':careRecipientId' 
    AND event_type="mood_observation" 
  ORDER BY timestamp ASC;`;
