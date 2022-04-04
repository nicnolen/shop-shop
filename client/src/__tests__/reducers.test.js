//TODO: TEST REDUCER FUNCTIONALITY
//! Import actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';

//! Import reducers
import { reducer } from '../utils/reducers';

//! Create a sample of what global state will look like
const initialState = {
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1', // refers to the index of the categories array
};

//! Test for updating products list
test('UPDATE_PRODUCTS', () => {
  let newState = reducer(initialState, {
    // execute the UPDATE_PRODUCTS action
    type: UPDATE_PRODUCTS, //? Type of action we are performing (predefined action)
    // update products list to be a new array of products
    products: [{}, {}], //? Value (name) representing the new data you want to use with the action
  });

  //* check to make sure products were added to the new state
  expect(newState.products.length).toBe(2);
  //* check to make sure initial state didnt change
  expect(initialState.products.length).toBe(0);
});

//! Test for updating the categories array
test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    // execute the UPDATE_CATEGORIES action
    type: UPDATE_CATEGORIES,
    // update categories list to be a new array of categories
    categories: [{}, {}],
  });

  //* check to make sure categories were added to the new state
  expect(newState.categories.length).toBe(2);
  //* check to make sure initial state didnt change
  expect(initialState.categories.length).toBe(1);
});

//! Test to update the current category with products of that category
test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    // update the state of currentCategory to a new string value
    currentCategory: '2',
  });

  //* Make sure new state changed
  expect(newState.currentCategory).toBe('2');
  //* Make sure initial state did not change
  expect(initialState.currentCategory).toBe('1');
});