import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Row, Col } from "react-bootstrap";
import FormComment from "../formcomment/FormComment";
import SingleComment from "../singleComment/SingleComment";
import "./commentArea.css";
import { darkState } from "../../reducer/darkModeSlice";
import { useSelector } from "react-redux";
import { CommentContext } from "../provider/CommentContext";
const CommentArea = ({ id }) => {
  // State variables
  const [show, setShow] = useState(false);
  const toggleReload = () => setReload(!reload);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isDarkMode = useSelector(darkState);
  const { setCardId, cardId, comments, reload, setReload } =
    useContext(CommentContext);

  // Function to handle click on a card/book
  const handleCardClick = (e) => {
    setCardId(e.target.id);
    handleShow();
  };

  // Fetch comments for the selected card/book when cardId or reload changes

  return (
    <>
      {/* Button to trigger the modal */}
      <Button
        id={id}
        variant={`${isDarkMode ? "light" : "dark"}`}
        onClick={handleCardClick}
      >
        Show Comments
      </Button>

      {/* Modal component */}
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Comments Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Row to display comments and comment form */}
          <Row className="position-relative">
            {/* Column to display comments */}
            <Col lg="7">
              <div>
                {/* Display existing comments or a message if there are none */}
                {comments.length === 0 ? (
                  <p>No comments yet</p>
                ) : (
                  comments.map((comment, i) => (
                    <SingleComment
                      key={i}
                      description={comment.comment}
                      author={comment.author}
                      date={comment.createdAt}
                      rate={comment.rate}
                    />
                  ))
                )}
              </div>
            </Col>
            {/* Column to display comment form */}
            <Col lg="5">
              <FormComment elementId={cardId} toggleReload={toggleReload} />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {/* Button to close the modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentArea;
