import { EventType } from '../enums/event-type';

interface MessageSection {
  prefix: string;
  attribute: any;
}
const EMPTY_MESSAGE = 'No message provided.';

const constructMessage = (messageSections: MessageSection[]): string => {
  if (messageSections.length === 0) {
    return EMPTY_MESSAGE;
  }

  let message = '';

  for (const section of messageSections) {
    message = `${message}${section.prefix}: '${parseAttribute(
      section.attribute
    )}'${
      messageSections.indexOf(section) !== messageSections.length - 1
        ? '; '
        : ''
    }`;
  }

  return message;
};

const parseAttribute = (attribute: any): string => {
  if (typeof attribute === 'boolean') {
    return attribute.toString();
  }

  return attribute || '-';
};

export const generateMessageForEventType = (
  eventType: EventType,
  payload: string
) => {
  const payloadObject = JSON.parse(payload) as any;

  if (!payloadObject || Object.keys(payloadObject).length === 0) {
    return EMPTY_MESSAGE;
  }

  let messageSections: MessageSection[] = [];

  switch (eventType) {
    case (EventType.PHYSICAL_HEALTH_OBSERVATION,
    EventType.GENERAL_OBSERVATION,
    EventType.MENTAL_HEALTH_OBSERVATION,
    EventType.TASK_SCHEDULE_CREATED):
      messageSections = [{ prefix: 'Note', attribute: payloadObject.note }];
      break;
    case (EventType.VISIT_COMPLETED,
    EventType.CHECK_OUT,
    EventType.ALERT_RAISED,
    EventType.CHECK_IN,
    EventType.VISIT_CANCELLED,
    EventType.NO_MEDICATION_OBSERVATION_RECEIVED):
      messageSections = [];
      break;
    case EventType.FLUID_INTAKE_OBSERVATION:
      messageSections = [
        { prefix: 'Fluid', attribute: payloadObject.fluid },
        { prefix: 'Observed', attribute: payloadObject.observed },
        {
          prefix: 'Consumed volume (ml)',
          attribute: payloadObject.consumed_volume_ml,
        },
      ];
      break;
    case EventType.TASK_COMPLETED:
      messageSections = [
        {
          prefix: 'Task schedule note',
          attribute: payloadObject.task_schedule_note,
        },
        {
          prefix: 'Task definition description',
          attribute: payloadObject.task_definition_description,
        },
      ];
      break;
    case EventType.MOOD_OBSERVATION:
      messageSections = [
        {
          prefix: 'Mood',
          attribute: payloadObject.mood,
        },
      ];
      break;
    case EventType.REGULAR_MEDICATION_TAKEN:
      messageSections = [
        {
          prefix: 'Medication type',
          attribute: payloadObject.medication_type,
        },
      ];
      break;
    case EventType.INCONTINENCE_PAD_OBSERVATION:
      messageSections = [
        {
          prefix: 'Note',
          attribute: payloadObject.note,
        },
        {
          prefix: 'Pad condition',
          attribute: payloadObject.pad_condition,
        },
      ];
      break;
    case EventType.REGULAR_MEDICATION_NOT_TAKEN:
      messageSections = [
        {
          prefix: 'Note',
          attribute: payloadObject.note,
        },
        {
          prefix: 'Medication failure reason',
          attribute: payloadObject.medication_failure_reason,
        },
      ];
      break;
    case EventType.FOOD_INTAKE_OBSERVATION:
      messageSections = [
        {
          prefix: 'Meal type',
          attribute: payloadObject.meal,
        },
        {
          prefix: 'Note',
          attribute: payloadObject.note,
        },
      ];
      break;
    case EventType.TASK_COMPLETION_REVERTED:
      messageSections = [
        {
          prefix: 'Task schedule note',
          attribute: payloadObject.task_schedule_note,
        },
        {
          prefix: 'Task definition description',
          attribute: payloadObject.task_definition_description,
        },
      ];
      break;
    case (EventType.MEDICATION_SCHEDULE_CREATED,
    EventType.MEDICATION_SCHEDULE_UPDATED):
      messageSections = [
        {
          prefix: 'Note',
          attribute: payloadObject.note,
        },
        {
          prefix: 'Type',
          attribute: payloadObject.type,
        },
        {
          prefix: 'Dose size',
          attribute: payloadObject.dose_size,
        },
      ];
      break;
    case EventType.REGULAR_MEDICATION_MAYBE_TAKEN:
      messageSections = [
        {
          prefix: 'Note',
          attribute: payloadObject.note,
        },
        {
          prefix: 'Medication failure reason',
          attribute: payloadObject.medication_failure_reason,
        },
      ];
      break;
    case EventType.ALERT_QUALIFIED:
      messageSections = [
        {
          prefix: 'Alert severity',
          attribute: payloadObject.alert_severity,
        },
      ];
      break;
    case EventType.CONCERN_RAISED:
      messageSections = [
        {
          prefix: 'Note',
          attribute: payloadObject.note,
        },
        {
          prefix: 'Severity',
          attribute: payloadObject.severity,
        },
      ];
      break;
    case EventType.REGULAR_MEDICATION_PARTIALLY_TAKEN:
      messageSections = [
        { prefix: 'Note', attribute: payloadObject.note },
        { prefix: 'Medication type', attribute: payloadObject.medication_type },
        {
          prefix: 'Medication failure reason',
          attribute: payloadObject.medication_failure_reason,
        },
      ];
      break;
    case EventType.CATHETER_OBSERVATION:
      messageSections = [
        { prefix: 'Note', attribute: payloadObject.note },
        { prefix: 'Volume (ml)', attribute: payloadObject.volume_ml },
      ];
      break;
    case EventType.TOILET_VISIT_RECORDED:
      messageSections = [
        { prefix: 'Note', attribute: payloadObject.note },
        { prefix: 'Observed', attribute: payloadObject.observed },
        { prefix: 'Visit type', attribute: payloadObject.visit_type },
        { prefix: 'Visit count', attribute: payloadObject.visit_count },
      ];
      break;
    default:
      messageSections = [];
      break;
  }

  return constructMessage(messageSections);
};
