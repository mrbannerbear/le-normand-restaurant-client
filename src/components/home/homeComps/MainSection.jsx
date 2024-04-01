import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSectionHero from "../../custom/MainSectionHero";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

AOS.init({
  offset: 10, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

const MainSection = () => {
  const data = [
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1616669944447-d65d41a222bd?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      title: "Haute Cuisine",
      p1: "Explore",
      p2: `Wonderfully-crafted menus, influenced by French & Italian cuisine
           along with stark elements from the regions of South Asia.`,
      direction: `row-reverse`,
      path: "/menus",
    },
    {
      id: 2,
      img: `https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      title: "Corte Preziosa",
      p1: "",
      p2: `Inspired by the seaside caffès on the coast of Amalfi, our private dining experience is the highlight of the restaurant.`,
      direction: `row`,
      path: "/private-dining",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1488992783499-418eb1f62d08?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Our Story",
      p2: "How William LeNormand's travels brought exotic ingredients to a refined cuisine.",
      direction: "column-reverse",
      path: "/about",
    },
  ];

  return (
    <div>
      <div className="sticky top-0 z-50" data-aos="fade-up">
        <Navbar></Navbar>
      </div>

      <section className="lg:mt-8 p-4 lg:px-12">
        {data.map((each) => (
          <MainSectionHero key={each.id} data={each}></MainSectionHero>
        ))}

        <div className="my-12 lg:my-16 text-center lg:min-h-[70vh]">
          <h2 className="title-size font-semibold italic my-4">Book a Table</h2>
          <div className="grid grid-cols-2 p-4 lg:w-2/3 mx-auto gap-5 md:gap-0">

          <div className="flex items-center">
                <div className="text-right">
                  <h2 className="font-semibold text-3xl">Peak Fine Dining</h2>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <p className="my-2">Everything in quintessential fine dining and more.</p>
                  <button className="smooth-underline"><NavLink to={`/reservation`}>Check Reservations</NavLink></button>
                </div>
            </div>

            <div>
              <img
                className="mx-auto h-80 md:h-96"
                src="https://images.unsplash.com/photo-1602956033956-003e7180d339?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

       
            <div className="-mt-12"> 
           
              <img
                className="mx-auto h-80 md:h-96"
                src="https://images.unsplash.com/photo-1572812643511-0ff6acaa8817?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>

            <div className="flex items-center">
                <div className="text-left">
                  <h2 className="font-semibold text-3xl">An Experience of a Lifetime</h2>
                  <p className="my-2">Enjoy Corte Preziosa, the ultimate fine dining experience.</p>
                  <button className="smooth-underline"><NavLink to={`/private-dining`}>Contact For Details</NavLink></button>
                </div>
            </div>

          </div>
        </div>

        <MainSectionHero
          data={{
            id: 5,
            img: `https://images.unsplash.com/photo-1604328471151-b52226907017?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            title: "Follow us On our Socials",
            p1: "Keep in Touch With Us",
            p2: (
              <div className="text-4xl flex gap-5">
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
              </div>
            ),
            direction: `row`,
          }}
        />
      </section>
    </div>
  );
};

export default MainSection;
