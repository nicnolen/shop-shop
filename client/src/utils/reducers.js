//TODO: REDUX REDUCERS
//! Import dependencies
import { useReducer } from 'react';

//! Import actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';

//! Reducer function to update products list
export const reducer = (state, action) => {
  switch (action.type) {
    //* if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    //* if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    //* if action type value is the value of `UPDATE_CURRENT_CATEGORY`, return a new state object with an updated string
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
    //* if action type value is the value of `ADD_TO_CART`, return a new state object with an updated cart array and the products
    case ADD_TO_CART:
      return {
        ...state, // preserve everything else on state
        cartOpen: true, // users can immediately view the cart with the newly added items
        cart: [...state.cart, action.product],
      };
    //* if action type value is the value of `ADD_MULTIPLE_TO_CART`, return a new state object with an updated cart array and the products
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
    //* Reducer function for action type value `REMOVE_FROM_CART`
    case REMOVE_FROM_CART:
      // only keep items that dont match the _id property
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0, // set cartOpen to true as long as the newState length is > 0
        cart: newState,
      };
    //* Reducer function for action type value `UPDATE_CART_QUANTITY`
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };
    //* Reducer function for action type value `CLEAR_CART`
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };
    //* Reducer function for action type value `TOGGLE_CART`
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
      
    //* if it's none of these actions, do not update state at all and keep things the same
    default:
      return state;
  }
};

//! Export reducers
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
