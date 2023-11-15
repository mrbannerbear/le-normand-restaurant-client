import { useRef } from "react";
import Banner from "./homeComps/Banner";
import MainSection from "./homeComps/MainSection";
import Footer from "../mainComps/Footer";

const Home = () => {

    const testRef = useRef(null)

    const handleScrollDown = () => {
        testRef.current?.scrollIntoView({ behavior: 'smooth' });
      }

    return (
        <div className="bg-olive-50">
            <Banner click={handleScrollDown}></Banner>
            <div className="min-h-screen" ref={testRef}>
                <MainSection></MainSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;