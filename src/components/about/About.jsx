import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>
                    About | Restaurant Le Normand
                </title>
            </Helmet>

        <div className="">
            <div className="md:w-3/4 mx-auto p-6 lg:py-12">
                <div className="text-center">
                <h1 className="text-4xl lg:text-5xl italic">Crafting Memories <br /> With A Symphony of Flavours </h1>
                </div>

                <div className="py-6 lg:py-12 flex gap-10 flex-col lg:flex-row items-center">
                    <img className="h-[480px]"
                     src="https://images.unsplash.com/photo-1611520175743-30ff00129621?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>
                Discover quintessential fine dining. 
                Immerse yourself in a symphony of flavors meticulously crafted by our culinary artisans. Our passion for gastronomy 
                is showcased in every dish, creating an 
                unparalleled dining experience. Join us in savoring the pinnacle of fine dining, where each plate is a work of art.
                </p>
                </div>

                <div className="py-6 lg:py-12 flex gap-10 flex-col lg:flex-row items-center">
                    <img className="h-[480px]"
                     src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>
                Discover quintessential fine dining. 
                Immerse yourself in a symphony of flavors meticulously crafted by our culinary artisans. Our passion for gastronomy 
                is showcased in every dish, creating an 
                unparalleled dining experience. Join us in savoring the pinnacle of fine dining, where each plate is a work of art.
                </p>
                </div>
            </div>
        </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default About;