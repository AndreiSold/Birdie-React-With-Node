import { AppState } from './index';

export const careRecipientsSelector = (state: AppState) =>
  state.careRecipients.careRecipients;
export const careRecipientsLoadingSelector = (state: AppState) =>
  state.careRecipients.loading;
