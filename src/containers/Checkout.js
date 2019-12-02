import React from "react";
import Settings from "../containers/Settings";

export default function Checkout(props) {
  console.log(props);
  let adder = props.cartItems.reduce((acc, next) => {
    console.log(acc, next.price);
    return acc + next.price * next.qty;
  }, 0);
  return (
    <div>
      <Settings cartItems={props.cartItems} />
    </div>
  );
}
