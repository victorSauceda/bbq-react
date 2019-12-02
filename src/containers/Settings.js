import React, { useState } from "react";
import { API } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../configAWS";
import "./Settings.css";

export default function Settings(props) {
  const [isLoading, setIsLoading] = useState(false);

  function billUser(details) {
    return API.post("stripe", "/billing", {
      body: details
    });
  }
  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      alert(error);
      return;
    }

    setIsLoading(true);

    try {
      await billUser({
        storage,
        source: token.id
      });

      alert("Your card has been charged successfully!");
      props.history.push("/");
    } catch (e) {
      alert(e);
      setIsLoading(false);
    }
  }

  console.log("cartItems:", props.cartItems);
  return (
    <div className="Settings">
      <StripeProvider apiKey={config.STRIPE_KEY}>
        <Elements>
          <BillingForm
            isLoading={isLoading}
            onSubmit={handleFormSubmit}
            cartItems={props.cartItems}
            history={props.history}
          />
        </Elements>
      </StripeProvider>
    </div>
  );
}
