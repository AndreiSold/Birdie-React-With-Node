export enum EventType {
  FLUID_INTAKE_OBSERVATION = 'fluid_intake_observation', // Payload data: fluid, observed, consumed_volume_ml
  TASK_COMPLETED = 'task_completed', // Payload data: task_schedule_note, task_definition_description
  PHYSICAL_HEALTH_OBSERVATION = 'physical_health_observation', // Payload data: note
  VISIT_COMPLETED = 'visit_completed', // Payload data: -
  CHECK_OUT = 'check_out', // Payload data: -
  MOOD_OBSERVATION = 'mood_observation', // Payload data: mood
  REGULAR_MEDICATION_TAKEN = 'regular_medication_taken', // Payload data: medication_type (optional)
  ALERT_RAISED = 'alert_raised', // Payload data: -
  NO_MEDICATION_OBSERVATION_RECEIVED = 'no_medication_observation_received', // Payload data: -
  INCONTINENCE_PAD_OBSERVATION = 'incontinence_pad_observation', // Payload data: note, pad_condition
  CHECK_IN = 'check_in', // Payload data: -
  GENERAL_OBSERVATION = 'general_observation', // Payload data: note (might be long)
  REGULAR_MEDICATION_NOT_TAKEN = 'regular_medication_not_taken', // Payload data: note, medication_failure_reason
  FOOD_INTAKE_OBSERVATION = 'food_intake_observation', // Payload data: meal (meal or snack), note
  TASK_COMPLETION_REVERTED = 'task_completion_reverted', // Payload data: task_schedule_note, task_definition_description
  MENTAL_HEALTH_OBSERVATION = 'mental_health_observation', // Payload data: note
  MEDICATION_SCHEDULE_UPDATED = 'medication_schedule_updated', // Payload data: note, type, dose_size
  VISIT_CANCELLED = 'visit_cancelled', // Payload data: -
  REGULAR_MEDICATION_MAYBE_TAKEN = 'regular_medication_maybe_taken', // Payload data: note, medication_failure_reason
  MEDICATION_SCHEDULE_CREATED = 'medication_schedule_created', // Payload data: note, type, dose_size
  ALERT_QUALIFIED = 'alert_qualified', // Payload data: alert_severity
  TASK_SCHEDULE_CREATED = 'task_schedule_created', // Payload data: note (optional)
  CONCERN_RAISED = 'concern_raised', // Payload data: note, severity
  REGULAR_MEDICATION_PARTIALLY_TAKEN = 'regular_medication_partially_taken', // Payload data: note, medication_type, medication_failure_reason
  CATHETER_OBSERVATION = 'catheter_observation', // Payload data: note, volume_ml
  TOILET_VISIT_RECORDED = 'toilet_visit_recorded', // Payload data: note, observed, visit_type, visit_count
}
