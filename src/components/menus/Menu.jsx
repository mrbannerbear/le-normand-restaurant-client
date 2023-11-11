import { useEffect, useState } from "react";
import MenuBanner from "./menuComps/menuBanner";
import ALaCarte from "./ALaCarte";
import { IoMdArrowUp } from "react-icons/io";
import TastingMenu from "./menuComps/TastingMenu";

const Menu = () => {
  useEffect(() => {
    fetch("/assets/menu.json")
      .then((res) => res.json())
      .then((data) => setCarte(data))
      .catch((err) => console.log(err));
  }, []);

  const [carte, setCarte] = useState([]);

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
      <MenuBanner></MenuBanner>

      <div className="flex items-center flex-col py-12 lg:py-24">

        <div className="text-center" style={open1 ? {marginBottom: "12px"} : {marginBottom: "24px"}}>
          <h2 className="mb-3 text-xl">
          <button onClick={handleOpen1} className="smooth-underline">  À La Carte </button>
          </h2>

          { open1 &&
            <div>
              <ALaCarte
                data={carte}
                details={{ category: "Appetizer" }}
              ></ALaCarte>
              <ALaCarte
                data={carte}
                details={{ category: "Entrée" }}
              ></ALaCarte>
              <ALaCarte
                data={carte}
                details={{ category: "Dessert" }}
              ></ALaCarte>
              <button onClick={() => setOpen1(false)}><IoMdArrowUp></IoMdArrowUp></button>
            </div>
          }
        </div>

        <div className="text-center my-6">
          <h2 className="mb-3 text-xl">
          <button onClick={handleOpen2} className="smooth-underline">  Tasting Menu </button>
          </h2>

          { open2 &&
            <div>
              <TastingMenu
                data={carte}
                details={{ category: "Appetizer" }}
              ></TastingMenu>
              <TastingMenu
                data={carte}
                details={{ category: "Entrée" }}
              ></TastingMenu>
              <TastingMenu
                data={carte}
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
