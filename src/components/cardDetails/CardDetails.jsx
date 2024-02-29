import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./cardDetails.css";
import SingleComment from "../singleComment/SingleComment";
import { CommentContext } from "../provider/CommentContext";

const CardDetails = () => {
  const { setCardId, comments } = useContext(CommentContext);
  const [bookDetail, setBookDetail] = useState(null);
  const { id } = useParams();

  const getBookDetails = async () => {
    try {
      const response = await fetch(`https://epibooks.onrender.com/${id}`);
      const data = await response.json();
      if (data && data.length > 0) {
        setBookDetail(data[0]);
      } else {
        throw new Error("No data found");
      }
      console.log(bookDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetails();
    setCardId(id);
  }, [id]);
  console.log(comments);
  return (
    <>
      <Container>
        <Row>
          <Col>
            {bookDetail && (
              <Card className="bg-dark text-white">
                <Card.Img src={bookDetail.img} alt={bookDetail.title} />
                <Card.ImgOverlay>
                  <Card.Title>{bookDetail.title}</Card.Title>
                  <Card.Text>{bookDetail.category}</Card.Text>
                  <Card.Text>{bookDetail.price}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            )}
          </Col>
          <Col className="comment_section">
            {comments.map((comment, i) => (
              <SingleComment
                key={i}
                description={comment.comment}
                author={comment.author}
                date={comment.createdAt}
                rate={comment.rate}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardDetails;
