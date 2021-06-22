import { mapKeys } from 'lodash';
import { Reducer } from 'redux';
import { CareRecipient } from '../../models/careRecipient';
import {
  CareRecipientsActions,
  CareRecipientsActionTypes,
} from '../actions/careRecipientsActions';

export interface CareRecipientsState {
  careRecipients: {
    [id: string]: CareRecipient;
  };
  loading: boolean;
}

const initialCareRecipientsState: CareRecipientsState = {
  careRecipients: {},
  loading: false,
};

export const careRecipientsReducer: Reducer<
  CareRecipientsState,
  CareRecipientsActions
> = (state = initialCareRecipientsState, action) => {
  switch (action.type) {
    case CareRecipientsActionTypes.LOAD_ALL_CARE_RECIPIENTS_SUCCESS: {
      return {
        ...state,
        careRecipients: mapKeys(action.data, 'id'),
        loading: false,
      };
    }
    case CareRecipientsActionTypes.LOAD_ALL_CARE_RECIPIENTS_ERROR: {
      return {
        ...state,
        careRecipients: {},
        loading: false,
      };
    }
    case CareRecipientsActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload as unknown as boolean,
      };
    }
    default:
      return state;
  }
};
