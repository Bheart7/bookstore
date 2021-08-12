import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";
import { formatDate } from "./components/helper";

function App() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/list_books")
      .then((res) => {
        setBooks(res.data);
        console.log(books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCards = () => {
    const items = books.map((item, i) => {
      return (
        <div className="col-lg-4 mb-3" key={item.id}>
          <Card
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
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
