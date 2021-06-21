import {
  connectRouter,
  routerMiddleware,
  RouterState,
} from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { isEmpty } from 'lodash';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import {
  careRecipientsReducer,
  CareRecipientsState,
} from './reducers/careRecipientsReducer';
import { eventsReducer, EventsState } from './reducers/eventsReducer';

export interface AppState {
  router: RouterState;
  careRecipients: CareRecipientsState;
  events: EventsState;
}

export const publicUrl = process.env.PUBLIC_URL || '';
export const history =
  typeof window !== 'undefined'
    ? createBrowserHistory({ basename: publicUrl })
    : ({} as any);

const createRootReducer = (history: History) =>
  combineReducers<AppState>({
    router: !isEmpty(history) ? connectRouter(history) : ({} as any),
    careRecipients: careRecipientsReducer,
    events: eventsReducer,
  });

const configureStore = (initialState?: AppState): Store<AppState, any> => {
  const composeEnhancer: typeof compose =
    typeof window !== 'undefined'
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  const store = createStore(
    createRootReducer(history),
    initialState as any,
    !isEmpty(history)
      ? composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
      : composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};

export const store = configureStore();

export default store;
