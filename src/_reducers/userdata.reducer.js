import { userdataConstants } from "../_constants";

const initialServiceState = {
  userdata: {
    name: "",
    degree: "",
    biography: "",
    skills: [],
    elligibleUS: null
  },
  loading: false,
  error: null
};
export function userdata(state = initialServiceState, action) {
  switch (action.type) {
    case userdataConstants.UPDATE_DATA:
      return { ...state, userdata: action.payload };
    default:
      return state;
  }
}