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
            <div className="text-center py-6 lg:py-12">
            <h1 className="text-4xl lg:text-5xl italic">Crafting Culinary Memories <br /> With A Symphony of Flavours </h1>
                <div>
                    <img className="h-[480px]"
                     src="https://images.unsplash.com/photo-1611520175743-30ff00129621?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default About;