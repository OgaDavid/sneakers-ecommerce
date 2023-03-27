export const INITIAL_STATE = {};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      return;
    case REMOVE_CART:
      return;
    case INCREASE:
      return;
    case DECREASE:
      return;
    default:
      return state;
  }
};
