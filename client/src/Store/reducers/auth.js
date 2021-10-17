import { LOGIN } from "../actions/auth";

const initialState = {
  auth: false,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN:
      state.auth = !state.auth;
      return state;

    default:
      return state;
  }
};
