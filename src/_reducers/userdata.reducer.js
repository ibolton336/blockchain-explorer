import { userdataConstants } from "../_constants";

const initialServiceState = {
  latestBlock: null,
  block: null,
  transaction: null,
  loading: false,
  error: null
};
export function userdata(state = initialServiceState, action) {
  switch (action.type) {
    case userdataConstants.GET_LATEST_REQUEST:
      return { ...state };
    case userdataConstants.GET_LATEST_SUCCESS:
      return { ...state, latestBlock: action.block};
    case userdataConstants.GET_LATEST_ERROR:
      return { ...state, error: action.payload };
    case userdataConstants.SEARCH_BLOCKS_REQUEST:
      return { ...state };
    case userdataConstants.SEARCH_BLOCKS_SUCCESS:
      return { ...state, block: action.block};
    case userdataConstants.SEARCH_BLOCKS_ERROR:
      return { ...state, error: action.block};
    case userdataConstants.SEARCH_TRANSACTIONS_REQUEST:
      return { ...state };
    case userdataConstants.SEARCH_TRANSACTIONS_SUCCESS:
      return { ...state,transaction: action.transaction};
    case userdataConstants.SEARCH_TRANSACTIONS_ERROR:
      return { ...state, error: action.transaction};
    default:
      return state;
  }
}