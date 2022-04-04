//TODO: HOME PAGE COMPONENT KEEPS TRACK OF CURRENT CATEGORY WE ARE VIEWING
//! Import dependencies
import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
import Cart from '../components/Cart';

//! Create Home component
const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
