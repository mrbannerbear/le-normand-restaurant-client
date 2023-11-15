import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const MainSectionHero = ({ data }) => {
  const { img, title, p1, p2, direction, path } = data;
  return (
    <div className="hero min-h-[50vh]">
      <div
        className={`hero-content flex lg:gap-10`}
        style={
          direction === "row-reverse"
            ? {
                flexDirection: "row-reverse",
              }
            : direction === "row"
            ? { flexDirection: "row" }
            : { flexDirection: "column-reverse" }
        }
      >
        <NavLink to={path}>
          <img
            src={img}
            className="max-w-[12rem] object-contain md:max-w-md lg:max-w-lg shadow-2xl"
          />
        </NavLink>
        <div>
          {direction !== "column-reverse" ? (
            <>
              <p className="relative ml-3 lg:mb-3 text-sm lg:text-xl font-semibold">
                {p1}
              </p>
              <h1 className="title-size mb-2 lg:mb-0 font-semibold italic">
                {title}
              </h1>
              <p className="lg:py-6 text-[0.6rem] md:text-sm lg:text-base">
                {p2}
              </p>
            </>
          ) : (
            <div className="lg:-mb-10 lg:mt-10">
              <p className="lg:mb-3 text-sm lg:text-xl font-semibold">
                {p1}
              </p>
              <h1 className="title-size mb-2 lg:mb-0 font-semibold italic text-center">
                {title}
              </h1>
              <p className="lg:py-6 text-[0.6rem] md:text-sm lg:text-base text-center">
                {p2}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSectionHero;
