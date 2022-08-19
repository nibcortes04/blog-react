import { SET_USER } from "../actions/types";

let accessToken = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : "";

const initialState = {
  accessToken: "" || accessToken,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("accessToken", JSON.stringify(action.payload));
      return { ...state, accessToken: action.payload };

    default:
      return state;
  }
}
