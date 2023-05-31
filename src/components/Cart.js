import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Cart = () => {
  const products = useSelector((state) => state.cart);

  const cards = products.map((products) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card key={products.id} style={{ width: "18rem" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={products.image}
            style={{ width: "100px", height: "130px " }}
          />
        </div>
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>{products.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="danger">Remove item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <>{cards}</>;
};
export default Cart;
