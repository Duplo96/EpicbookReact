import React, { useEffect, useState } from "react";
import { EcommerceCard } from "../card/Card";
import { CustomSpinner } from "../loader/Spinner";
import getData from "../../api";
import { Form, FormControl, Button } from "react-bootstrap";

const Allthebooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valueBook, setValueBook] = useState("");
  const [arrayFiltered, setArrayFiltered] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const handleChange = (e) => {
    const filtered = e.target.value;
    setValueBook(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getData();
        setBooks(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeColor = (e) => {
    const selectedBook = e.currentTarget;
    selectedBook.classList.toggle("clicked-card");
  };

  const clickForFilter = () => {
    setArrayFiltered(
      books.filter((book) =>
        book.title.toLowerCase().includes(valueBook.toLowerCase())
      )
    );
    setIsFilter(true);
  };

  return (
    <div className="container bg-white">
      <div className="row justify-content-around mt-5">
        <Form className="col-md-6">
          <Form.Group controlId="default-search" className="mb-3">
            <Form.Label className="text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </Form.Label>
            <div className="position-relative">
              <FormControl
                onChange={handleChange}
                value={valueBook}
                type="search"
                className="form-control"
                placeholder="Search Books..."
                required
              />
              <Button
                onClick={clickForFilter}
                type="button"
                className="btn btn-primary position-absolute top-50 end-0 translate-middle-y"
              >
                Search
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
      {loading ? (
        <div className="spinner d-flex justify-content-center my-5">
          {CustomSpinner()}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {(isFilter && valueBook.length > 0 ? arrayFiltered : books)
            .slice(0, 20)
            .map((book) => (
              <div className="col" key={book.asin}>
                <EcommerceCard
                  id={book.asin}
                  onClick={changeColor}
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  category={book.category}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Allthebooks;
