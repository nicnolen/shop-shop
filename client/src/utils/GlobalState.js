//TODO: CREATE A GLOBAL STATE THAT MAKES STATEFUL DATA AVAILABLE ACROSS UNRELATED COMPONENTS
//! Import dependencies
import React, { createContext, useContext } from 'react'; //? createContext: create the container that holds the golbal state data and functionality. useContext: allows you to use the state created from the createContext function
import { useProductReducer } from './reducers';

//! Create the global state object
const StoreContext = createContext();
const { Provider } = StoreContext; //? Every Context object comes with a Provide and Consumer. Provider makes state data passed in available to all components. Consumer grabs and uses the Provider data

//! Function to manage and update state
const StoreProvider = ({ value = [], ...props }) => {
  //* create initial global state
  //? state: most up-to date version of global state object. dispatch: method to update our state
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

//! Function to be used by the components that need the data from the StoreProvider function
const useStoreContext = () => {
  return useContext(StoreContext);
};

//! Export StoreProvide and useStoreContext
export { StoreProvider, useStoreContext };
