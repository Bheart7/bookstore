import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import axios from "axios";
import { formatDate, currencyConv } from "./components/helper";

function App() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [disabled, setDisabled] = useState(false);
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

  const handleCart = (id) => {
    let tempCart = [...cart];
    let item = books.filter((book) => book.id === id);
    tempCart.push(item);
    setCart(tempCart);
  };

  const inCart = (id) => {
    let status;
    // console.log(books);
    // status = cart.filter((item) => item.id === id) || false;
    // console.log(`Status of ${id}`, status);
  };

  const showCart = () => {
    const items = cart.map((item, i) => {
      return (
        <div className="mb-3" key={i}>
          <CartItem
            id={item[0].id}
            name={item[0]["name "]}
            image={item[0].image}
            price={item[0].price}
            author={item[0].author}
            genre={item[0].genre}
          />
        </div>
      );
    });

    if (cart.length >= 1) {
      return items;
    } else {
      return <p>No items in the cart</p>;
    }
  };

  const handleCards = () => {
    const items = books.map((item, i) => {
      return (
        <div className="col-lg-4 mb-3" key={item.id}>
          <Card
            handleCart={handleCart}
            inCart={inCart}
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
            <div className="col-lg-9">
              <div className="row">{items}</div>
            </div>
            <div className="col-lg-3">
              <div
                className="d-flex flex-column p-3 text-white bg-dark"
                style={{ width: "280px" }}
              >
                <h1>Cart Items</h1>
                {showCart()}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Navbar />
      {handleCards()}
    </div>
  );
}

export default App;
