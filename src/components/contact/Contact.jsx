import ContactForm from "./ContactComps.jsx/ContactForm";
import { Helmet } from "react-helmet-async";
import { NavLink, ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Contact | Restaurant Le Normand</title>
    </Helmet>
    <div className="bg-olive-50 min-h-screen px-12 py-12 md:px-24">
      <h1 className="text-center title-size mb-12">Contact Us</h1>
      <div className="flex flex-col-reverse md:grid md:grid-cols-3">
        <div className="w-full">
          <p>53 Park Lane London W1K 1QA +88 (0) 2457 0956 12</p>
          <p>lenormandreservations@lenormand-ctg.com</p>
          <h2 className="font-semibold text-xl my-2">OPENING HOURS</h2>
          Opening hours: Tuesday to Saturday 18:00 to 21:30 Reservations opening
          hours: Monday to Friday 10:00 – 18:00 Saturday 12:00 – 18:00.  <br />
            We are happy to welcome children aged ten years and above into the
          restaurant.
          <h2 className="font-semibold text-xl my-2">DRESS CODE</h2>
          Our dress code is smart-casual. Jackets and collared shirts are
          preferred and long trousers are required for gentlemen. Appropriate
          footwear is required.
          <h2 className="font-semibold text-xl my-2">PRIVATE DINING </h2>
          Please contact on +880 134 125 1395 or +880 127 256 9862. Visit the 
          <NavLink className="mx-1 underline" to="/private-dining">Private Dining</NavLink> 
          section of the website for more details.
          <h2 className="font-semibold text-xl my-2">PRESS</h2>
          For any press or media enquiries, please contact: Raian Hasan <br />
           Email: hasan.raian@lenormand-ctg.com
          <h2 className="font-semibold text-xl my-2">CAREERS </h2>
          Please submit your application
          to recruitment@lenormand-ctg.com
        </div>

        <div className="flex flex-col gap-3 col-span-2 md:w-3/4 mx-auto">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
    <ScrollRestoration></ScrollRestoration>
    </>
  );
};

export default Contact;
