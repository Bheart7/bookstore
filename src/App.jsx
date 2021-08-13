import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  formatDate,
  currencyConv,
  getNumber,
  moneyFormatter,
} from "./components/helper";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";

function App() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSum, setCartSum] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/list_books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCart = (id, items) => {
    setCart(items);
    let tempCart = [...cart];
    let item = books.filter((book) => book.id === id);
    tempCart.push(item);
    setCart(tempCart);

    // add cart total
    let total = cartSum + getNumber(currencyConv(item[0].price));
    setCartSum(total);
  };

  const removeCart = (id, items) => {
    setCart(items);
    let tempCart = [...cart];
    let item = books.filter((book) => book.id === id);
    tempCart = books.filter((book) => book.id !== id);
    setCart(tempCart);
    let total = 0;
    // remove cart total
    if (cartSum >= 0) {
      total = cartSum - getNumber(currencyConv(item[0].price));
    }
    setCartSum(total);
  };

  const handleCards = () => {
    const items = books.map((item, i) => {
      return (
        <div className="col-lg-4 mb-3" key={item.id}>
          <Card
            item={item}
            handleCart={handleCart}
            id={item.id}
            name={item["name "]}
            image={item.image}
            price={currencyConv(item.price)}
            stock={item.stock}
            author={item.author}
            genre={item.genre}
            published_date={formatDate(item.published_date)}
          />
        </div>
      );
    });

    if (loading) {
      return <div className="d-flex justify-content-center mt-3">Loading</div>;
    } else {
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-10">
              <div className="row">{items}</div>
            </div>
            <Cart
              cartSum={cartSum}
              removeCart={removeCart}
              handleCart={handleCart}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <CartProvider>
      <ToastContainer />
      <div>
        <Navbar />
        {handleCards()}
      </div>
    </CartProvider>
  );
}

export default App;
