import { useState } from "react";
import MenuBanner from "./menuComps/MenuBanner";
import ALaCarte from "./menuComps/ALaCarte";
import { IoMdArrowUp } from "react-icons/io";
import TastingMenu from "./menuComps/TastingMenu";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ScrollRestoration } from "react-router-dom";

const Menu = () => {
  const handleOpen1 = () => {
    setOpen1(!open1);
  };

  const handleOpen2 = () => {
    setOpen2(!open2);
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="bg-olive-50 min-h-screen pb-12">
      <Helmet>
        <title>Menu | Restaurant Le Normand</title>
      </Helmet>

      <MenuBanner></MenuBanner>

      <div className="flex items-center flex-col pt-12 pb-6 lg:py-24">
        <div
          className="text-center"
          style={open1 ? { marginBottom: "24px" } : { marginBottom: "2px" }}
        >
          <h2 className="mb-3 text-xl">
            <button onClick={handleOpen1} className="smooth-underline">
              {" "}
              À La Carte{" "}
            </button>
          </h2>

          {open1 && (
            <div>
              <ALaCarte details={{ category: "Appetizer" }}></ALaCarte>
              <ALaCarte details={{ category: "Entrée" }}></ALaCarte>
              <ALaCarte details={{ category: "Dessert" }}></ALaCarte>
              <button onClick={() => setOpen1(false)}>
                <IoMdArrowUp></IoMdArrowUp>
              </button>
            </div>
          )}
        </div>

        <div
          className="text-center"
          style={open2 ? { marginTop: "24px" } : { marginTop: "6px" }}
        >
          <h2 className="mb-3 text-xl">
            <button onClick={handleOpen2} className="smooth-underline">
              {" "}
              Tasting Menu{" "}
            </button>
          </h2>

          {open2 && (
            <div>
              <TastingMenu details={{ category: "Appetizer" }}></TastingMenu>
              <TastingMenu details={{ category: "Entrée" }}></TastingMenu>
              <TastingMenu details={{ category: "Dessert" }}></TastingMenu>
              <button onClick={() => setOpen2(false)}>
                <IoMdArrowUp></IoMdArrowUp>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="px-3">
        <Swiper
          pagination={{
            type: "custom",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper md:w-1/2 h-[300px] md:h-[450px] mx-auto"
        >
          <SwiperSlide>
            <img
              className="h-full w-full"
              src="https://images.unsplash.com/photo-1517274885739-760f0910eefc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="h-full w-full"
              src="https://images.unsplash.com/photo-1616669989627-0cea7f32be2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-full w-full"
              src="https://images.unsplash.com/photo-1532270441355-095a26af8a99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Menu;
