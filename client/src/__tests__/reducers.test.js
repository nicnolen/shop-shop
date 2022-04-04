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
    type: UPDATE_PRODUCTS, // Type of action we are performing (predefined action)
    products: [{}, {}], // Value (name) representing the new data you want to use with the action
  });

  //* check to make sure products were added to the new state
  expect(newState.products.length).toBe(2);
  //* check to make sure initial state didnt change
  expect(initialState.products.length).toBe(0);
});
