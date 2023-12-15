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
    <div className="navbar bg-base-100 h-20">
      <div className="flex-1">
        <NavLink to="/">
        <img
          src="https://i.imgur.com/cZez2Pm.png"
          className="w-36 lg:w-64 p-4 lg:px-12"
          alt=""
        />
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex mr-8 items-center gap-4">
          {NavComps.map((each) => (
            <NavLink
              className={({ isPending, isActive }) =>
                isPending ? "" : isActive ? "border-b-[1px] border-[#607244]" : "smooth-underline"
              }
              key={each.id}
              to={each.path}
            >
              <li className="">{each.name}</li>
            </NavLink>
          ))}
          <NavLink to="/reservation">
            <li
              className=" smooth-bg"
            >
              <span className="hover:text-white hover:bg-transparent">Book a Reservation</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
