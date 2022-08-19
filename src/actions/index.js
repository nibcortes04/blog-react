import { SET_POSTS, SET_USER, SET_TAGS } from "./types";

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
