import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const MainSectionHero = ({ data }) => {
  const { img, title, p1, p2, direction, path } = data;
  return (
    <div className="hero min-h-[50vh]">

      <div
        className={`hero-content flex gap-10`}
        style={direction === "row-reverse" ? {
        flexDirection: "row-reverse"
        } : { flexDirection: "row" }}
      >
        <NavLink to={path}>
          <img src={img} className="max-w-[12rem] object-contain md:max-w-md lg:max-w-lg shadow-2xl" />
        </NavLink>
        <div>
            <p className="relative ml-3 mb-3 text-xl font-semibold">{p1}</p>
          <h1 className="title-size font-semibold italic">{title}</h1>
          <p className="py-6">{p2}</p>
        </div>
      </div>
      

    </div>
  );
};

export default MainSectionHero;
