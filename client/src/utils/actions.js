//TODO: REDUX ACTIONS

//! DEFINE ACTIONS
//* Store data retrieved for products from Apollo in the state created by UPDATE_PRODUCTS action
export const UPDATE_PRODUCTS = 'UPDATE PRODUCTS';
//* Store data retrieved for categories from Apollo in the state created by UPDATE_CATEGORIES action
export const UPDATE_CATEGORIES = 'UPDATE CATEGORIES';
//* Select a category from the state created by UPDATE_CATEGORIES action and display products for that category from the list created by the UPDATE_PRODUCTS action
export const UPDATE_CURRENT_CATEGORY = 'UPDATE CURRENT_CATEGORY';
export const ADD_TO_CART = 'ADD TO CART';
export const ADD_MULTIPLE_TO_CART = 'ADD MULTIPLE TO CART';
export const REMOVE_FROM_CART = 'REMOVE FROM CART';
export const UPDATE_CART_QUANTITY = 'UPDATE CART QUANTITY';
export const CLEAR_CART = 'CLEAR CART';
export const TOGGLE_CART = 'TOGGLE_CART';

