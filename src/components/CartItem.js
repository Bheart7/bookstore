import React from "react";

const CartItem = ({ id, name, image, price, author, genre }) => {
  return (
    <div className="card text-dark">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Price: {price}</p>
        <button type="button" className="btn btn-dark">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CartItem;
