//TODO: HOME PAGE COMPONENT KEEPS TRACK OF CURRENT CATEGORY WE ARE VIEWING
//! Import dependencies
import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';

//! Create Home component
const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
    </div>
  );
};

export default Home;
