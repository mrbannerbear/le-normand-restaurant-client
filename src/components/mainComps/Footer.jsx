import { NavLink } from "react-router-dom";

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

  return (
    <footer className="bg-olive-50">
    <div className="flex flex-row flex-wrap items-center justify-center px-12
     gap-y-6 gap-x-12  pt-12 mb-4 text-center w-full">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            Legal
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact"
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="w-full flex justify-center text-sm pb-8">
        <span>{year} {`\u00A9`} Restaurant Le Normand </span>
    </div>
    </footer>
  );
};

export default Footer;
