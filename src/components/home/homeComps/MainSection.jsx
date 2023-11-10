
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import MainSectionHero from "../../custom/MainSectionHero";

AOS.init({
  offset: 10, // offset (in px) from the original trigger point
  delay: 150, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
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
           p2: `Wonderfully-crafted menus, inspired by French, Italian & classic American cuisine 
           along with stark elements from the regions of South Asia.`,
           direction: `row-reverse`,
           path: "/menus"
        },
        {
            id: 2,
            img: `https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
           title: "Corte Preziosa",
           p1: "",
           p2: `Inspired by the seaside caffès on the coast of Amalfi, our private dining experience is the highlight of the restaurant.`,
           direction: `row`,
           path: "/private-dining"
        },
    ]

  return (
    <div>
      <div className="sticky top-0 z-50" data-aos="fade-up">
        <Navbar></Navbar>
      </div>

      <section className="lg:mt-8 p-4 lg:px-12">

        {data.map(each => (
                    <MainSectionHero key={each.id} data={each}
                    ></MainSectionHero>
        ))}


      </section>

    </div>
  );
};

export default MainSection;
