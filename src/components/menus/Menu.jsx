import { useEffect, useState } from "react";
import MenuBanner from "./menuComps/menuBanner";
import ALaCarte from "./menuComps/ALaCarte";
import { IoMdArrowUp } from "react-icons/io";
import TastingMenu from "./menuComps/TastingMenu";
import { Helmet } from "react-helmet-async";

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
    <div className="bg-olive-50 min-h-screen">

    <Helmet>
        <title>Menu | Restaurant Le Normand</title>
    </Helmet>

      <MenuBanner></MenuBanner>

      <div className="flex items-center flex-col py-12 lg:py-24">

        <div className="text-center" style={open1 ? {marginBottom: "24px"} : {marginBottom: "2px"}}>
          <h2 className="mb-3 text-xl">
          <button onClick={handleOpen1} className="smooth-underline">  À La Carte </button>
          </h2>

          { open1 &&
            <div>
              <ALaCarte
                details={{ category: "Appetizer" }}
              ></ALaCarte>
              <ALaCarte
                details={{ category: "Entrée" }}
              ></ALaCarte>
              <ALaCarte
                details={{ category: "Dessert" }}
              ></ALaCarte>
              <button onClick={() => setOpen1(false)}><IoMdArrowUp></IoMdArrowUp></button>
            </div>
          }
        </div>

        <div className="text-center" style={open2 ? { marginTop: "24px" } : { marginTop: "6px" }}>
          <h2 className="mb-3 text-xl">
          <button onClick={handleOpen2} className="smooth-underline">  Tasting Menu </button>
          </h2>

          { open2 &&
            <div>
              <TastingMenu
                details={{ category: "Appetizer" }}
              ></TastingMenu>
              <TastingMenu
                details={{ category: "Entrée" }}
              ></TastingMenu>
              <TastingMenu
                details={{ category: "Dessert" }}
              ></TastingMenu>
              <button onClick={() => setOpen2(false)}><IoMdArrowUp></IoMdArrowUp></button>
            </div>
          }
        </div>

      </div>
    </div>
  );
};

export default Menu;
