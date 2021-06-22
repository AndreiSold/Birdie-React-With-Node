import { AppState } from './index';

// Care recipients
export const careRecipientsSelector = (state: AppState) =>
  state.careRecipients.careRecipients;
export const careRecipientsLoadingSelector = (state: AppState) =>
  state.careRecipients.loading;
export const careRecipientByIdSelector = (
  careRecipientId: string,
  state: AppState
) => state.careRecipients.careRecipients[careRecipientId];

// Events
export const eventsByCareRecipientIdSelector = (
  careRecipientId: string,
  state: AppState
) => state.events.events[careRecipientId];
export const eventsLoadingSelector = (state: AppState) => state.events.loading;
