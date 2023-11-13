import "../contact/Contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import ContactForm from "./ContactComps.jsx/ContactForm";

const Contact = () => {
  return (
    <div className="bg-olive-50 min-h-screen px-12 py-12 md:px-24">
      <h1 className="text-center title-size mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="w-full">
          <p>53 Park Lane London W1K 1QA +88 (0) 2457 0956 12</p>
          <p>lenormandreservations@lenormand-ctg.com</p>
          <h2 className="font-semibold text-xl">OPENING HOURS</h2>
          Opening hours: Tuesday to Saturday 18:00 to 21:30 Reservations opening
          hours: Monday to Friday 10:00 – 18:00 Saturday 12:00 – 18:00 We are
          happy to welcome children aged ten years and above into the
          restaurant.
          <h2 className="font-semibold text-xl">DRESS CODE</h2>
          Our dress code is smart-casual. Jackets and collared shirts are
          preferred and long trousers are required for gentlemen. Appropriate
          footwear is required.
          <h2 className="font-semibold text-xl">PRIVATE DINING </h2>
          Please contact Luize Mikelsone on +44 (0)20 7319 7384 or
          luize.mikelsone@alainducasse-dorchester.com or by visiting the «
          Private Dining » section of the website.
          <h2 className="font-semibold text-xl">PRESS</h2>
          For any press or media enquiries, please contact: Anais Malet Email:
          anais.malet@alainducasse-dorchester.com
          <h2 className="font-semibold text-xl">CAREERS ></h2>
          Please visit DucassecParis Careers website or submit your application
          to recruitment@alainducasse-dorchester.com
        </div>

        <div className="flex flex-col gap-3 col-span-2 md:w-3/4 mx-auto">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
