import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSectionHero from "../../custom/MainSectionHero";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      p1: "Learn About",
      p2: "& What Inspires Us",
      direction: "column-reverse",
      path: "/about",
    }
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

          <div className="my-12 text-center min-h-[70vh]">
              <h2 className="title-size font-semibold italic">Book a Table</h2>
          </div>

        <MainSectionHero data={
             {
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
            }
        }/>
      </section>
    </div>
  );
};

export default MainSection;
