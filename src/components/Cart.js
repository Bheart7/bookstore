import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import CartItem from "../components/CartItem";
import { currencyConv, moneyFormatter, getNumber } from "../components/helper";

const Cart = ({ cart, cartSum, setCartSum }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;

  if (totalUniqueItems >= 5) {
    toast.error("Can't add more than 5 genres");
  }

  return (
    <div className="col-lg-2">
      <div
        className="d-flex flex-column p-3 text-white bg-dark"
        style={{ width: "280px" }}
      >
        <h1>Cart Items</h1>
        <p>No. of Genre : {totalUniqueItems}</p>
        <p>Total Amount : {totalItems}</p>
        <p>Total Price : {moneyFormatter(cartSum)}</p>
        <button
          type="button"
          className="btn btn-light mb-3"
          onClick={() => emptyCart()}
        >
          Empty Cart
        </button>
        {items.map((item, i) => {
          return (
            <div className="mb-3" key={i}>
              {console.log(item)}
              <CartItem
                removeItem={removeItem}
                updateItemQuantity={updateItemQuantity}
                quantity={item.quantity}
                id={item.id}
                name={item["name "]}
                price={currencyConv(item.price)}
                author={item.author}
                genre={item.genre}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
