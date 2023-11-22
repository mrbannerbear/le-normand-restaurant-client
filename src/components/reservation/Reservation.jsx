import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Reservation = () => {
  const stripePromise = loadStripe(
    "pk_test_51OExdgCibCkEW5UbewvmExxjnDfWjoOqrT4LgVsQlQkvYiOvTNALjs2nA2RLfA47I5kXSrXBquj4cI5tSQyp9Mhn00SMQzWNWN"
  );

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550851405-a82adf80b299?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
      className="min-h-screen bg-fixed bg-cover py-8"
    >
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Reservation;
