import { FETCH_POSTS, FETCH_ASSET } from '../actions/blogActions';
const INITIAL_STATE = { all: [] };
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data.items };
    default:
      return state;
  }
}