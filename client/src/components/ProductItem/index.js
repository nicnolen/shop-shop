//TODO: PRODUCT ITEM COMPONENT
//! Import dependencies
import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';

//! Create ProductItem component
function ProductItem(item) {
  const { image, name, _id, price, quantity } = item;
  const [state, dispatch] = useStoreContext();

  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: { ...item, purchaseQuantity: 1 },
    });
  };
  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
      <div>
        <div>
          {quantity} {pluralize('item', quantity)} in stock
        </div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
