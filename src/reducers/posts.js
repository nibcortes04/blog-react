import { SET_POSTS, SET_TAGS } from "../actions/types";

const initialState = {
  list: [],
  tags: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, list: action.payload };

    case SET_TAGS:
      return { ...state, tags: action.payload };

    default:
      return state;
  }
}
