import { useEffect } from "react";
import { useState, UseEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const { data: products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);

  const addtoCart = (products) => {
    dispatch(add(products));
  };

  const cards = products?.map((products) => (
    <div className="col-md-2" style={{ marginBottom: "10px" }}>
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
          <Button variant="primary" onClick={() => addtoCart(products)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
