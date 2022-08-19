import { SET_POSTS, SET_TAGS, SET_COMMENTS_POST } from "../actions/types";

const initialState = {
  list: [],
  tags: [],
  commentsPost: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, list: action.payload };

    case SET_TAGS:
      return { ...state, tags: action.payload };

    case SET_COMMENTS_POST:
      return { ...state, commentsPost: action.payload };

    default:
      return state;
  }
}
