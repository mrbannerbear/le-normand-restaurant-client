/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io"
// ..

const Banner = ({click}) => {

  return (
    <div
      className="hero min-h-screen bg-fixed"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550851405-a82adf80b299?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="h-full w-full bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      <div className="hero-content text-center text-white lg:text-lg">
        <div className="max-w-md">
            <h3>We welcome you at</h3>
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Restaurant Le Normand</h1>
            <p className="mb-5">
                Where you embark on an exquisite culinary adventure, feast on art. It is much more than
                what your appetite will experience. It is textbook fine dining at its finest.
            </p>
        </div>
        <button onClick={click} className="absolute bottom-4 lg:bottom-8 md:text-xl lg:text-4xl ">
            <IoIosArrowDown></IoIosArrowDown>
        </button>
      </div>
    </div>
  );
};

export default Banner;
