import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import AxiosSecure from "../custom/AxiosSecure";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollRestoration } from "react-router-dom";

AOS.init();

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [transactionID, setTransactionID] = useState(null);
  // const [booked, setBooked] = useState(0);
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [service, setService] = useState("Lunch");
  // const [paymentVisibility, setPaymentVisibility] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosSecure().post("/payment-intent", {
          price: 200,
        });
        setClientSecret(response.data?.client_secret);
      } catch (error) {
        console.error(error);
      }
    };

    (async () => {
      await fetchData();
    })();
  }, []);

  const stripe = useStripe();
  const elements = useElements();

  const handleAvailability = (e) => {
    e.preventDefault();
    // console.log(booked)
    const peopleNew = +e.target.people.value;
    // setPeople(people + booked);
    // console.log(people);
    const service = e.target.service.value;
    const date = e.target.date.value.toString();
    // console.log(peopleNew)
    axios
      .get(
        `https://server-pearl-iota.vercel.app/reservations?date=${date}&&${service}`
      )
      .then((data) => {
        const bookedPeople = data.data.map(each => each?.people).reduce((prev, curr) => prev + curr, 0) 
        console.log(bookedPeople)
        setPeople(bookedPeople + peopleNew);
        setDate(date);
        setService(service)
        console.log(people)
      })
      .catch((err) => console.log(err));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("clientSecret", clientSecret);

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const title = e.target.title.value;
    const card = elements.getElement(CardElement);

    if (!stripe || !elements) {
      return console.log("stripe hook or elements hook missing");
    }

    if (!card) {
      return alert("card null");
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: firstName + " " + lastName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      setTransactionID(paymentIntent.id);

      const paymentDetails = {
        title: title,
        name: `${title} ${firstName} ${lastName}`,
        email: email,
        phone: phone,
        people: people,
        service: service,
        date: date,
      };
      axios
        .post(
          "https://server-pearl-iota.vercel.app/reservations",
          paymentDetails
        )
        .then(() => {})
        .catch();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
   {!people ?  <form
        className="w-96 mx-auto p-8 bg-olive-50-transparent -mt-12"
        onSubmit={handleAvailability}
      >
        <h2>Availability</h2>

        <div className="flex  gap-1">
          <div className="mb-1">
            <label htmlFor="people" className="text-gray-500 text-base">
              Reservation for:
            </label>
            <select
              name="people"
              id=""
              className="ml-1 bg-transparent outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <div className="mb-1">
              <select
                name="service"
                id="service"
                className="ml-1 bg-transparent outline-none"
              >
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            </div>
          </div>
        </div>

        <div className="relative z-0 w-full mb-6 group mt-4">
          <input
            type="date"
            name="date"
            id="date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="date"
            className="peer-focus:font-medium absolute  text-gray-500 
              dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
              top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Please choose a date
          </label>
        </div>

        <div className="w-full">
          <button className="w-full bg-olive-600 text-white font-medium py-3  focus:outline-none mt-4">
            Check Availability
          </button>
        </div>
      </form>
      :
      (
        <form
          className="w-full max-w-lg mx-auto p-8"
          onSubmit={handleForm}
          // data-aos="fade-in"
        >
          <div className="bg-olive-50-transparent shadow-lg p-6 relative">
            <h2 className="text-lg font-medium mb-6 text-olive-600">
              Reservation
            </h2>
            <>
              <div className="mb-3">
                <label htmlFor="title" className="text-gray-500 text-sm">
                  Title:
                </label>
                <select
                  name="title"
                  id=""
                  className="ml-1 text-sm bg-transparent outline-none"
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last Name
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First Name
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telephone
                  </label>
                </div>
              </div>
              <div className="mt-8">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
                <button
                  disabled={!stripe || !elements}
                  type="submit"
                  className="w-full bg-olive-600 text-white font-medium py-3  focus:outline-none mt-4"
                >
                  Book
                </button>
              </div>
              <div className="w-full text-center text-red-500 text-sm mt-2">
                {!error ? "" : error?.message}
              </div>
              <div className="w-full text-center text-sm mt-2">
                {transactionID && <>Booking successful</>}
              </div>
            </>
          </div>
        </form>
      )}
   
   <ScrollRestoration></ScrollRestoration>
    </div>
  );
};



export default CheckoutForm