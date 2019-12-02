import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContent from "./CartContent";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart(props) {
  console.log("Cart props: ", props);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h2 className="text-center">My Cart</h2>

      {props.cartItems.length > 0 ? (
        <CartContent
          cartItems={props.cartItems}
          addToCart={props.addToCart}
          updateCartItem={props.updateCartItem}
          removingCartItem={props.removingCartItem}
          subTotal={props.subTotal}
        />
      ) : (
        <p className="alert alert-danger" role="alert">
          Cart is currently empty
        </p>
      )}
      <Button onClick={() => props.history.push("/checkout")}>Checkout</Button>
    </div>
  );
}
export default Cart;
