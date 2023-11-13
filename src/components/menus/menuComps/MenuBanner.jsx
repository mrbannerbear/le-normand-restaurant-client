/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 10, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease-in", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});


const MenuBanner = () => {
    return (
        <div className="bg-olive-700 min-h-[80vh] relative flex justify-center items-center text-white">

            <div className="w-1/2 pl-12 ml-auto" data-aos="fade-in">
            <h1 className="text-4xl font-semibold mb-4">
                    Culinary Innovation Like No Other
                </h1>
                <p>William Le Normand's travels around the globe introduced him to
                    exotic & prized ingredients that he brought to the table. That along with fresh, 
                    seasonal produce are what make our menus unique. That means you can enjoy truly wonderful dishes, served 
                    at their best time of the year.
                </p>
            </div>
            <div className="w-1/2" data-aos="fade-in" data-aos-delay="250">
                <img className="w-[80%] relative top-24 mx-auto"
                src="https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            
        </div>
    );
};

export default MenuBanner;