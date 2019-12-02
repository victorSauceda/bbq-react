import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./BillingForm.css";

function BillingForm({ isLoading, onSubmit, ...props }) {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    storage: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);
  console.log("billing props", props);
  isLoading = isProcessing || isLoading;

  function validateForm() {
    return fields.name !== "" && fields.storage !== "" && isCardComplete;
  }

  async function handleSubmitClick(event) {
    event.preventDefault();

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({
      name: fields.name
    });

    setIsProcessing(false);

    onSubmit(fields.storage, { token, error });
  }
  let adder = props.cartItems.reduce((acc, next) => {
    console.log(acc, next);
    return acc + next.price * next.qty;
  }, 0);
  console.log("adder:", adder);

  return (
    <form className="BillingForm" onSubmit={handleSubmitClick}>
      <FormGroup bsSize="large" controlId="storage">
        <FormLabel>Subtotal</FormLabel>
        <FormControl
          min="0"
          type="number"
          value={adder}
          onChange={handleFieldChange}
          placeholder="Number of notes to store"
        />
      </FormGroup>
      <hr />
      <FormGroup bsSize="large" controlId="name">
        <FormLabel>Cardholder&apos;s name</FormLabel>
        <FormControl
          type="text"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Name on the card"
        />
      </FormGroup>
      <FormLabel>Credit Card Info</FormLabel>
      <CardElement
        className="card-field"
        onChange={e => setIsCardComplete(e.complete)}
        style={{
          base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif' }
        }}
      />
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        isLoading={isLoading}
        disabled={!validateForm()}
      >
        Purchase
      </LoaderButton>
    </form>
  );
}

export default injectStripe(BillingForm);
