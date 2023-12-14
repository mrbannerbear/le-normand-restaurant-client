import AOS from "aos";
import "aos/dist/aos.css";

AOS.init()

const PrivateBanner = () => {
  return (
    <div
      className="min-h-screen bg-cover text-white text-center relative flex items-center justify-center bg-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1602860739945-9a61573cd62d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
        <div className="absolute h-full w-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div className="h-full -bottom-12 relative z-20" data-aos="fade-in" data-aos-delay="350">
        <h1 className="text-5xl font-semibold">Corte Preziosa</h1>
        <h2 className="text-center text-2xl font-medium mt-4">
          The Fine Dining Experience, Elevated...
        </h2>
      </div>
    </div>
  );
};

export default PrivateBanner;
