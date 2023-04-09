import { ACTION_TYPES } from "../constants";

export const INITIAL_STATE = {
  products: {
    categories: {
      sneakers: [
        {
          title: "Fall Limited Edition Sneakers",
          description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
          price: "125.00",
        },
      ],
    },
  },
  cart: 0,
  cartItems: [],
};

export const StoreReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      return {};
    case ACTION_TYPES.REMOVE_CART:
      return {};
    case ACTION_TYPES.INCREASE_CART:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case ACTION_TYPES.DECREASE_CART:
      return {
        ...state,
        cart: state.cart - 1,
      };
    default:
      return state;
  }
};
