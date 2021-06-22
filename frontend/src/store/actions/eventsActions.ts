import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { MoodObservation } from '../../models/moodObservation';
import { Event } from '../../models/event';
import { eventsService } from '../../services/eventsService';

export enum EventsActionTypes {
  LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT = '[Events] Load all events for care recipient',
  LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_SUCCESS = '[Events] Load all events for care recipient success',
  LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_ERROR = '[Events] Load all events for care recipient error',
  SET_LOADING = '[Events] Events loading',
}

export interface LoadAllEventsForCareRecipientAction {
  type: typeof EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT;
}

export const loadAllEventsForCareRecipient: ActionCreator<
  ThunkAction<Promise<any>, AppState, null, LoadAllEventsForCareRecipientAction>
> = (careRecipientId: string) => {
  return async (dispatch: Dispatch, getState) => {
    if (!Object.keys(getState().events.events).includes(careRecipientId)) {
      try {
        dispatch(setEventsLoading(true));
        const events: Event[] =
          await eventsService.getAllEventsForCareRecipientId(careRecipientId);
        const moodObservations: MoodObservation[] =
          await eventsService.getAllMoodObservationsForCareRecipientId(
            careRecipientId
          );
        dispatch(
          loadAllEventsForCareRecipientSuccess({
            careRecipientId,
            events,
            moodObservations,
          })
        );
      } catch (err) {
        dispatch(loadAllEventsForCareRecipientError());
        console.error(err);
      }
    }
  };
};

export interface LoadAllEventsForCareRecipientSuccessAction {
  type: typeof EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_SUCCESS;
  data: {
    careRecipientId: string;
    events: Event[];
    moodObservations: MoodObservation[];
  };
}

export const loadAllEventsForCareRecipientSuccess = (data: {
  careRecipientId: string;
  events: Event[];
  moodObservations: MoodObservation[];
}): LoadAllEventsForCareRecipientSuccessAction => ({
  type: EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_SUCCESS,
  data,
});

export interface LoadAllEventsForCareRecipientErrorAction {
  type: typeof EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_ERROR;
}

export const loadAllEventsForCareRecipientError =
  (): LoadAllEventsForCareRecipientErrorAction => ({
    type: EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_ERROR,
  });

export interface SetEventsLoadingAction {
  type: typeof EventsActionTypes.SET_LOADING;
  payload: boolean;
}

export const setEventsLoading = (loading: boolean) => ({
  type: EventsActionTypes.SET_LOADING,
  payload: loading,
});

export type EventsActions =
  | LoadAllEventsForCareRecipientAction
  | LoadAllEventsForCareRecipientSuccessAction
  | LoadAllEventsForCareRecipientErrorAction
  | SetEventsLoadingAction;
