import React, { useContext } from "react";
import { EcommerceCard } from "../card/Card";
import { CustomSpinner } from "../loader/Spinner";
import { SearchContext } from "../provider/SearchContext";
import { darkState } from "../../reducer/darkModeSlice";
import { useSelector } from "react-redux";
import "./allthebooks.css";
const Allthebooks = () => {
  const { loading, searchQuery, arrayFiltered, isFilter, books } =
    useContext(SearchContext);
  const isDarkMode = useSelector(darkState);
  const changeColor = (e) => {
    const selectedBook = e.currentTarget;
    selectedBook.classList.toggle("clicked-card");
  };

  return (
    <div className={`${isDarkMode ? "container dark" : "container bg-white"}`}>
      <div className="row justify-content-around mt-5"></div>
      {loading ? (
        <div className="spinner d-flex justify-content-center my-5">
          {CustomSpinner()}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {(isFilter && searchQuery.length > 0 && arrayFiltered.length > 0
            ? arrayFiltered
            : books
          )
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
