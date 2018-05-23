import { FETCH_MUSIC } from '../actions/musicActions';
const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_MUSIC:
    return { ...state, all: action.payload.data.items };
  default:
    return state;
  }
}