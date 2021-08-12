import React from "react";

const CartItem = ({ id, name, image, price, author, genre }) => {
  return (
    <div className="card text-dark">
      <div className="card-body">
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  );
};

export default CartItem;
