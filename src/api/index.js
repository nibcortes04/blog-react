import axios from "axios";

let config = {
  headers: {
    "app-id": process.env.REACT_APP_APPI_ID || "",
  },
};

export const getPosts = () => {
  return axios
    .get("https://dummyapi.io/data/v1/post?limit=10", config)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getTags = () => {
  return axios
    .get("https://dummyapi.io/data/v1/tag?limit=10", config)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getCommentPost = (idPost) => {
  return axios
    .get(`https://dummyapi.io/data/v1/post/${idPost}/comment?limit=10`, config)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
