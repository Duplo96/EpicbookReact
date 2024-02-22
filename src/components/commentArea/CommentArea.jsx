import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Row, Col } from "react-bootstrap";
import FormComment from "../formcomment/FormComment";
import SingleComment from "../singleComment/SingleComment";
import "./commentArea.css";

const CommentArea = ({ id }) => {
  // State variables
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [cardId, setCardId] = useState("");
  const [reload, setReload] = useState(false);
  const toggleReload = () => setReload(!reload);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle click on a card/book
  const handleCardClick = (e) => {
    setCardId(e.target.id);
    handleShow();
  };

  // Fetch comments for the selected card/book when cardId or reload changes
  useEffect(() => {
    if (cardId) {
      const getComment = async (cardId) => {
        try {
          const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/books/${cardId}/comments/`,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDgwODk2NjYsImV4cCI6MTcwOTI5OTI2Nn0.Oz2IYoLeW07qPhAbavLj94O7yxFjp0sKvTc5ep3U_1U",
              },
            }
          );
          const data = await response.json();
          setComments(data);
        } catch (error) {
          console.log(error);
        }
      };

      getComment(cardId);
    }
  }, [cardId, reload]);

  return (
    <>
      {/* Button to trigger the modal */}
      <Button id={id} variant="primary" onClick={handleCardClick}>
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
