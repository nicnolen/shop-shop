//TODO: TEST REDUCER FUNCTIONALITY
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
} from '../utils/actions';

//! Import reducers
import { reducer } from '../utils/reducers';

//! Create a sample of what global state will look like
const initialState = {
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1',
  cart: [
    {
      _id: '1',
      name: 'Soup',
      purchaseQuantity: 1,
    },
    {
      _id: '2',
      name: 'Bread',
      purchaseQuantity: 2,
    },
  ],
  cartOpen: false,
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

//! Test to add product to cart
test('ADD_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuantity: 1 },
  });

  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
});

//! Test to add multiple products to cart
test('ADD_MULTIPLE_TO_CART', () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_CART,
    products: [{}, {}],
  });

  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});

//! Test to remove item from cart
test('REMOVE_FROM_CART', () => {
  let newState1 = reducer(initialState, {
    type: REMOVE_FROM_CART,
    _id: '1',
  });

  //* cart is still open
  expect(newState1.cartOpen).toBe(true);

  //* the second item should now be the first
  expect(newState1.cart.length).toBe(1);
  expect(newState1.cart[0]._id).toBe('2');

  let newState2 = reducer(newState1, {
    type: REMOVE_FROM_CART,
    _id: '2',
  });

  //* cart is empty and closed
  expect(newState2.cartOpen).toBe(false);
  expect(newState2.cart.length).toBe(0);

  expect(initialState.cart.length).toBe(2);
});

//! Test to update item quantities
test('UPDATE_CART_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CART_QUANTITY,
    _id: '1', // make sure only the first items quantity is updated
    purchaseQuantity: 3,
  });
  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purchaseQuantity).toBe(2);

  expect(initialState.cartOpen).toBe(false);
});

//! Test to clear cart
test('CLEAR_CART', () => {
  let newState = reducer(initialState, {
    type: CLEAR_CART,
  });

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(2);
});

//! Test to handle carts visability
test('TOGGLE_CART', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_CART,
  });

  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_CART,
  });

  expect(newState2.cartOpen).toBe(false);
});
