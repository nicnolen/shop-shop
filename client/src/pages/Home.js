//TODO: HOME PAGE COMPONENT
//! Import dependencies
import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

//! Create Home component
const Home = () => {
  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      {/* Set the currentCategory to be passed to the ProductList component */}
      <CategoryMenu setCategory={setCategory} />
      {/* currentCategory instructs which category's products should be retrieved using Apollo */}
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
