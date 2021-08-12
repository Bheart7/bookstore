import React from "react";

const Card = ({
  id,
  name,
  image,
  price,
  stock,
  author,
  genre,
  published_date,
}) => {
  return (
    <div className="card" style={{ width: "10 rem" }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Published on {published_date}
        </h6>
        <p className="card-text">Author: {author}</p>
        <p className="card-text">Genre: {genre}</p>
        <p className="card-text">Stock: {stock}</p>
        <p className="card-text">Price: {price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Card;
