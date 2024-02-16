import { Card } from 'react-bootstrap'; // Importing necessary components from React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import CommentArea from '../commentArea/CommentArea';
import "./card.css"

export function EcommerceCard({ onClick, id, img, title, price, category }) {
  return (
    <Card
      key={id}
      className="group relative shadow mb-4 h-100"
      onClick={onClick}
  
    >
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-sm font-medium text-gray-900">{price}€</p>
          <CommentArea id={id}/>
        </div>
      </Card.Body>
    </Card>
  );
}