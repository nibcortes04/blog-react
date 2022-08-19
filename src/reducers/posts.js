import { SET_POSTS } from "../actions/types";

const initialState = {
  list: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
