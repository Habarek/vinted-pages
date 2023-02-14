import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  return (
    <div className="paiement">
      <p>résumé de la commande</p>
      <p>Commande</p>
      <p>Frai de protection acheteur</p>
      <p>Frais de port</p>
      <p>Total</p>

      <CardElement></CardElement>
      <button type="submit">Valider</button>
    </div>
  );
};
export default CheckoutForm;
