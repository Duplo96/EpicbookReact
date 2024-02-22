import React, { createContext, useEffect, useState } from "react";

// Creating a context object
const SearchContext = createContext();

// Creating a provider component to wrap the application and provide context values
const SearchProvider = ({ children }) => {
  // State variables for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [arrayFiltered, setArrayFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [books, setBooks] = useState([]);

  // Fetching data using useEffect hook when component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://epibooks.onrender.com/fantasy");
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error:" + error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Providing context values to the children components
  return (
    <SearchContext.Provider
      value={{
        books,
        setBooks,
        searchQuery,
        setSearchQuery,
        arrayFiltered,
        setArrayFiltered,
        isFilter,
        setIsFilter,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
