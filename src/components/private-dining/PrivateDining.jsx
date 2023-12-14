/* eslint-disable react/no-unescaped-entities */
import { ScrollRestoration, useNavigate } from "react-router-dom";
import PrivateBanner from "./privateComps/PrivateBanner";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../mainComps/Footer";
import { useState } from "react";

AOS.init();

const PrivateDining = () => {
  const navigate = useNavigate();
  const [bookingVisibility, setBookingVisibility] = useState(false)

  return (
    <>
      <Helmet>
        <title>Private Dining | Restaurant Le Normand</title>
      </Helmet>
      <PrivateBanner></PrivateBanner>
      <div className="min-h-screen bg-olive-50 py-12 px-3 md:px-6">


        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <FaArrowLeft></FaArrowLeft>
          </button>
        </div>

        <div className="hidden lg:grid grid-cols-2  mt-12">
          {/* 1 */}
          <div
            className="w-3/4 mx-auto relative lg:mt-40"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <br />
            <p>
              Our private dining area is tastefully adorned with ambient
              lighting, elegant decor, and comfortable seating, creating a cozy
              and welcoming atmosphere. Whether it's a romantic dinner for two,
              a family celebration, or a corporate gathering, our private dining
              space is versatile enough to cater to your unique needs.
            </p>
          </div>

          {/* 2 */}
          <div
            className="w-3/4 mx-auto lg:mr-auto"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <br />
            <h1 className="text-4xl font-semibold">
              An Experience Fit for Royals
            </h1>
            <br />
            <p>
              Indulge in a majestic dining experience with our exclusive Private
              Dining service, set against the breathtaking backdrop of nature's
              beauty. Nestled amidst the serenity of the sky blue river and
              embraced by the verdant hues of lush green hills, our premium
              dining setting promises an atmosphere that transcends the
              ordinary.
            </p>
          </div>

          {/* 3 */}
          <div
            className="w-3/4 mx-auto lg:mt-24"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <p className="max-w-lg">
              At the heart of this unique experience is a carefully curated
              menu, a well-guarded secret until the moment you arrive. Our
              culinary team has crafted a selection of exquisite dishes,
              incorporating seasonal ingredients and culinary creativity to
              ensure a dining journey that surprises and delights the palate.
              <br />
              <br />
            </p>
          </div>

          {/* 4 */}
          <div
            className="w-3/4 mx-auto lg:ml-0"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <img
              className="h-fit"
              src="https://images.unsplash.com/photo-1481819167214-0427aac02394?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

        </div>

        <div className="grid grid-cols-1 lg:hidden  mt-12">
          {/* 1 */}

          <div
            className="w-3/4 mx-auto lg:mr-auto md:mt-20"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1561501878-aabd62634533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <br />
            <h1 className="text-4xl font-semibold">
              An Experience Fit for Royals
            </h1>
            <br />
            <p>
              Indulge in a majestic dining experience with our exclusive Private
              Dining service, set against the breathtaking backdrop of nature's
              beauty. Nestled amidst the serenity of the sky blue river and
              embraced by the verdant hues of lush green hills, our premium
              dining setting promises an atmosphere that transcends the
              ordinary.
            </p>
          </div>

          {/* 2 */}
          <div
            className="w-3/4 mx-auto relative mt-20"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <br />
            <p>
              Our private dining area is tastefully adorned with ambient
              lighting, elegant decor, and comfortable seating, creating a cozy
              and welcoming atmosphere. Whether it's a romantic dinner for two,
              a family celebration, or a corporate gathering, our private dining
              space is versatile enough to cater to your unique needs.
            </p>
          </div>

          {/* 3 */}
          <div
            className="w-3/4 mx-auto lg:ml-0 mt-20"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <img
              className="h-fit"
              src="https://images.unsplash.com/photo-1481819167214-0427aac02394?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* 4 */}
          <div
            className="w-3/4 mx-auto mt-8"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <p className="max-w-lg">
              At the heart of this unique experience is a carefully curated
              menu, a well-guarded secret until the moment you arrive. Our
              culinary team has crafted a selection of exquisite dishes,
              incorporating seasonal ingredients and culinary creativity to
              ensure a dining journey that surprises and delights the palate.
              <br />
              <br />
            </p>
          </div>

        </div>

        <div
          className="w-full mt-8 lg:mt-24"
          data-aos="fade-in"
          data-aos-delay="350"
        >
          <img
            className="w-3/4 lg:w-1/3 mx-auto"
            src="https://images.unsplash.com/photo-1659275798347-d8e9000c388c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="w-3/4 lg:max-w-lg mx-auto mt-4">
            From discreet service to personalized recommendations, we strive to
            exceed your expectations, allowing you to focus on savoring the
            culinary delights and creating lasting memories with your guests.
          </p>
        </div>

            {!bookingVisibility && <div className="w-3/4 px-6 mx-auto mt-12 flex justify-center">
                <button className="smooth-underline"
                onClick={() => {
                    setBookingVisibility(true)
                }}
                >
                    See Booking Details
                </button>
            </div>}

           {bookingVisibility && <div className="mx-auto w-3/4 min-h-screen flex justify-center items-center">
                <div data-aos="fade-in"
                data-aos-delay="350">

                <h3 className="font-semibold text-3xl">Booking</h3>
                <br /><br />
                <p>
                    Please note, you have to pay $200 at advance to book our Private Dining service, just like our regular fine dining option.
                    However, our Private Dining option cannot be booked on the website.
                    <br /><br />
                    To book, please call one of the numbers given below. This call service is available from Sunday to Thursday, 8:00 am to 8:00pm UTC.
                    <br /><br />
                    You will be informed of available dates on phone. You may also enquire more about the Private Dining service.
                    <br /><br />
                    Once the available date is confirmed, you will be sent an SMS redirecting to a form where you may fill all details required.
                    You will also find all details on prices for the service.
                    <br /><br />
                     At last, you may proceed to the advance payment section. <br /><br />
                    Please call +880 134 125 1395 or +880 127 256 9862 to book. 
                    <br /><br />
                    We are eager to meet you at the prestigious 
                    Private Dining of Restaurant Le Normand.
                </p>

                <div className="w-3/4 px-6 mx-auto mt-12 flex justify-center">
                <button className="smooth-underline"
                onClick={() => {
                    setBookingVisibility(false)
                }}
                >
                    <FaArrowUp></FaArrowUp>
                </button>
            </div>

                </div>
            </div>}

      </div>
            <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default PrivateDining;
