import { Card } from "react-bootstrap"; // Importing necessary components from React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import CommentArea from "../commentArea/CommentArea";
import "./card.css";
import { darkState } from "../../reducer/darkModeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export function EcommerceCard({ onClick, id, img, title, price, category }) {
  const isDarkMode = useSelector(darkState);

  return (
    <Card
      key={id}
      id={id}
      className={`${
        isDarkMode ? "bg-dark text-white" : ""
      } group relative shadow mb-4 h-100`}
      onClick={onClick}
    >
      <Card.Img
        className="ratio ratio-1x1"
        variant="top"
        src={img}
        alt={title}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-sm font-medium text-gray-900">{price}€</p>
          <Link to={`/detail/${id}`}> aaaa </Link>
          <CommentArea id={id} />
        </div>
      </Card.Body>
    </Card>
  );
}
