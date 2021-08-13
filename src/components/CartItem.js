import React from "react";
import { useCart } from "react-use-cart";

const CartItem = ({
  id,
  name,
  price,
  author,
  updateItemQuantity,
  removeItem,
  handleCart,
  removeCart,
  genre,
  quantity,
  stock,
}) => {
  const { items } = useCart();
  return (
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Price: {price}</p>
        <p className="card-text">Quantity: {quantity}</p>
        <p className="card-text">Stock: {stock}</p>

        <div className="row">
          <div className="col-lg-3">
            <button
              type="button"
              onClick={() => {
                updateItemQuantity(id, quantity - 1);
                removeCart(id, items);
              }}
              className="btn btn-dark ms-2"
            >
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <div className="col-lg-3">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                updateItemQuantity(id, quantity + 1);
                handleCart(id, items);
              }}
              disabled={quantity >= stock}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark mt-3"
          onClick={() => removeItem(id)}
        >
          Remove item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
