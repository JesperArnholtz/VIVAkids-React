import { FETCH_MAINLINKS } from '../actions/navigationActions';

const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MAINLINKS:
    return { ...state, all: action.payload.data.items };
  default:
    return state;
  }
}