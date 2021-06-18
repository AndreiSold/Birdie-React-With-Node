import { EventType } from '../enums/event-type';

export interface Event {
  id: string;
  payload: string;
  payload_as_text: string;
  alert_id?: string;
  task_instance_id?: string;
  visit_id?: string;
  caregiver_id?: string;
  rejected_event_id?: string;
  observation_event_id?: string;
  timestamp: string;
  event_type: EventType;
  care_recipient_id: string;
}
