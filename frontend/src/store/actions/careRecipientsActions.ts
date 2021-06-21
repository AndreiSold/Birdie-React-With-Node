import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { CareRecipient } from '../../models/careRecipient';
import { careRecipientsService } from '../../services/careRecipientsService';

export enum CareRecipientsActionTypes {
  LOAD_ALL_CARE_RECIPIENTS = '[Care Recipients] Load all care recipients',
  LOAD_ALL_CARE_RECIPIENTS_SUCCESS = '[Care Recipients] Load all care recipients success',
  SET_LOADING = '[Care Recipients] Care recipients loading',
}

export interface LoadAllCareRecipientsAction {
  type: typeof CareRecipientsActionTypes.LOAD_ALL_CARE_RECIPIENTS;
}

export const loadAllCareRecipients: ActionCreator<
  ThunkAction<Promise<any>, AppState, null, LoadAllCareRecipientsAction>
> = () => {
  return async (dispatch: Dispatch, getState) => {
    if (Object.keys(getState().careRecipients.careRecipients).length === 0) {
      debugger;
      try {
        dispatch(setCareRecipientsLoading(true));
        const careRecipients: CareRecipient[] =
          await careRecipientsService.getAllCareRecipients();
        dispatch(loadAllCareRecipientsSuccess(careRecipients));
      } catch (err) {
        debugger;
        dispatch(loadAllCareRecipientsSuccess([]));
        console.error(err);
      }
    }
  };
};

export interface LoadAllCareRecipientsSuccessAction {
  type: typeof CareRecipientsActionTypes.LOAD_ALL_CARE_RECIPIENTS_SUCCESS;
  data: CareRecipient[];
}

export const loadAllCareRecipientsSuccess = (
  data: CareRecipient[]
): LoadAllCareRecipientsSuccessAction => ({
  type: CareRecipientsActionTypes.LOAD_ALL_CARE_RECIPIENTS_SUCCESS,
  data,
});

export interface SetCareRecipientsLoadingAction {
  type: typeof CareRecipientsActionTypes.SET_LOADING;
  payload: boolean;
}

export const setCareRecipientsLoading = (loading: boolean) => ({
  type: CareRecipientsActionTypes.SET_LOADING,
  payload: loading,
});

export type CareRecipientsActions =
  | LoadAllCareRecipientsAction
  | SetCareRecipientsLoadingAction
  | LoadAllCareRecipientsSuccessAction;
