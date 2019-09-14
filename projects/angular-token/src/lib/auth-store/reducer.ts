import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.CONNECT_CABLE: {
      return {
        ...state,
        isConnecting: true,
        error: null
      };
    }
    case ActionTypes.CONNECT_SUCCESS: {
      return {
        ...state,
        isConnecting: false,
        error: null
      };
    }
    case ActionTypes.CONNECT_FAILURE: {
      return {
        ...state,
        isConnecting: false,
        error: action.payload.error
      };
    }
    case ActionTypes.SET_CABLE: {
      return {
        ...state,
        cable: action.payload.cable
      };
    }
    default: {
      return state;
    }
  }
}
