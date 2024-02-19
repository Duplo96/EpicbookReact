import React from "react";
import "./singleComments.css";
const SingleComment = ({ img, author, date, description, rate }) => {
  return (
    <>
      <div className="comment mt-4 text-justify float-left">
        <h4>{author}</h4>
        <span> Aggiunto il: {date}</span>
        <br />
        <p>{description}</p>
        <p>Rate:{rate}</p>
      </div>
    </>
  );
};

export default SingleComment;
