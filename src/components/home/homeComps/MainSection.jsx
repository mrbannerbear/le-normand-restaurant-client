import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom',
})

const MainSection = () => {
    return (
        <div>
            <div className="sticky top-0" data-aos="fade-up">
            <Navbar></Navbar>
            </div>
        </div>
    );
};

export default MainSection;