// src/pages/Checkout.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Checkout.css";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useContext(CartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Payment successful!", paymentMethod);
      alert("Payment successful!");
    } else {
      console.error("Payment error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay Now</button>
    </form>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-container">
        <h2>Secure Checkout 💳</h2>
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Checkout;
