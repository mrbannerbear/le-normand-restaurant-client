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

        
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default About;