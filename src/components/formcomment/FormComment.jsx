import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormComment = ({ elementId, toggleReload }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: elementId,
  });
  const handlerComment = ({ target: { value } }) => {
    setComment((prevComment) => ({ ...prevComment, comment: value }));
  };
  const handlerRate = ({ target: { value } }) => {
    setComment((prevComment) => ({ ...prevComment, rate: value }));
  };
  const postComments = async (e, comment) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDgwODk2NjYsImV4cCI6MTcwOTI5OTI2Nn0.Oz2IYoLeW07qPhAbavLj94O7yxFjp0sKvTc5ep3U_1U",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      toggleReload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="sticky-top" onSubmit={(e) => postComments(e, comment)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Let us know your opinion</Form.Label>
        <Form.Control
          onChange={handlerComment}
          type="text"
          placeholder="Write here your comment"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rate this book</Form.Label>
        <Form.Control
          onChange={handlerRate}
          type="number"
          placeholder="Vote from 1 to 5"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormComment;
