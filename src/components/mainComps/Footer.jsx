import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center px-12 bg-olive-50
     gap-y-6 gap-x-12  py-12 text-center w-full">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            License
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            Contribute
          </NavLink>
        </li>
        <li>
          <NavLink
            className="block font-sans 
            text-base font-normal smooth-underline"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
