// MyNav.jsx
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Button } from "react-bootstrap";
import { SearchContext } from "../provider/SearchContext";
import SwitchMode from "../switchMode/SwitchMode";

const MyNav = (props) => {
  // Destructuring props
  const site = props.site;
  const home = props.link1;
  const about = props.link2;
  const browse = props.link3;

  // Accessing context values using useContext hook
  const { searchQuery, setSearchQuery, setArrayFiltered, setIsFilter, books } =
    useContext(SearchContext);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // Resetting filter when search input changes
    setIsFilter(false);
  };

  // Function to handle search button click
  const clickForFilter = (e) => {
    e.preventDefault();
    // Filtering books based on search query
    if (searchQuery.trim() !== "") {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Updating filtered books and filter state
      setArrayFiltered(filteredBooks);
      setIsFilter(true);
    } else {
      // Resetting filtered books and filter state when search query is empty
      setArrayFiltered([]);
      setIsFilter(false);
    }
  };

  return (
    <div>
      {/* Navbar component */}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* Navbar brand */}
          <Navbar.Brand href="#home">{site}</Navbar.Brand>
          {/* Navbar links */}
          <Nav className="me-auto">
            <Nav.Link href="#">{home}</Nav.Link>
            <Nav.Link href="#">{about}</Nav.Link>
            <Nav.Link href="#">{browse}</Nav.Link>
          </Nav>
          {/* Search form */}
          <SwitchMode />
          <Form className="d-flex">
            <FormControl
              // Handling search input change
              onChange={handleSearchInputChange}
              // Setting search input value
              value={searchQuery}
              type="search"
              className="form-control"
              placeholder="Search Books..."
              required
            />
            {/* Search button */}
            <Button
              // Handling click for search
              onClick={clickForFilter}
              type="button"
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
