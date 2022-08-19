import { SET_POSTS, SET_USER } from "./types";

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});
