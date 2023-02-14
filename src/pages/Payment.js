// permet le chargement pendant l'autorisation
import { loadStripe } from "@stripe/stripe-js";
// c'est l'input de strip qui permet de rentrer les coordonée sans passé pas nos server
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

//  stripePromise est une variable qui stock la clef public de stripe prouvant que j'ai un compte stripe
const stripePromise = loadStripe(
  "ppk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
