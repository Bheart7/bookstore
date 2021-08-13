import React from "react";
import { useCart } from "react-use-cart";

const Card = ({
  id,
  name,
  image,
  price,
  stock,
  author,
  genre,
  published_date,
  handleCart,
  item,
}) => {
  const { addItem, items } = useCart();
  let quantity = 0;
  if (items) {
    items.forEach((item) => {
      if (item.id === id) {
        quantity = item.quantity;
      }
    });
  }
  return (
    <div className="card" style={{ width: "10 rem" }}>
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Published on {published_date}
        </h6>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Genre: {genre}</p>
        <p className="card-text">Stock: {stock}</p>
        <p className="card-text">Price: {price}</p>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            addItem(item);
            handleCart(id, items);
          }}
          disabled={quantity >= stock}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
