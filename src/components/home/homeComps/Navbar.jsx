import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavComps = [
    {
      id: 1,
      name: "Menus",
      path: "/menus",
    },
    {
      id: 2,
      name: "Private Dining",
      path: "/private-dining",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img
          src="https://i.ibb.co/nMvsmNT/Tree-cropped.png"
          className="w-36 lg:w-64 p-4 lg:px-12"
          alt=""
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex mr-4 items-center">
          {NavComps.map((each) => (
            <NavLink key={each.id} to={each.path}>
              <li className="mr-4 smooth-underline">{each.name}</li>
            </NavLink>
          ))}
          <NavLink><li className="border-[1.5px] hover:text-white
           border-[#607244] p-2 smooth-bg smooth-color">Book a Reservation</li></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
