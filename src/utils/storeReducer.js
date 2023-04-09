import { ACTION_TYPES } from "../constants";

const INITIAL_STATE = {};

const StoreReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      return {};
    case ACTION_TYPES.REMOVE_CART:
      return {};
    case ACTION_TYPES.INCREASE_CART:
      return {};
    case ACTION_TYPES.INCREASE_CART:
      return {};
    case ACTION_TYPES.DECREASE_CART:
      return {};
    default:
      return state;
  }
};
