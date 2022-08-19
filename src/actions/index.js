import { SET_POSTS, SET_USER, SET_TAGS, SET_COMMENTS_POST } from "./types";

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setTags = (payload) => ({
  type: SET_TAGS,
  payload,
});

export const setCommentsPost = (payload) => ({
  type: SET_COMMENTS_POST,
  payload,
});
