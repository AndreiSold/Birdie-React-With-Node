import { cloneDeep } from 'lodash';
import { Reducer } from 'redux';
import { MoodObservation } from '../../models/moodObservation';
import { EventsActions, EventsActionTypes } from '../actions/eventsActions';
import { Event } from '../../models/event';

export interface EventsState {
  events: {
    [id: string]: { events: Event[]; moodObservations: MoodObservation[] };
  };
  loading: boolean;
}

const initialEventsState: EventsState = {
  events: {},
  loading: false,
};

export const eventsReducer: Reducer<EventsState, EventsActions> = (
  state = initialEventsState,
  action
) => {
  switch (action.type) {
    case EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_SUCCESS: {
      return {
        ...state,
        events: cloneDeep({
          ...state.events,
          [action.data.careRecipientId]: {
            events: action.data.events,
            moodObservations: action.data.moodObservations,
          },
        }),
        loading: false,
      };
    }
    case EventsActionTypes.LOAD_ALL_EVENTS_FOR_CARE_RECIPIENT_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case EventsActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload as unknown as boolean,
      };
    }
    default:
      return state;
  }
};
