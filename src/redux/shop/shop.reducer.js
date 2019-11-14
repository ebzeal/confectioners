import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  vendors: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_VENDORS:
      return {
        ...state,
        vendors: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
