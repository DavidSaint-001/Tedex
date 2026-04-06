import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import UpcomingEvent from "../components/UpcomingEvent";
import ThreeScene from "../components/ThreeScene";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      
      {/* <ThreeScene/> */}
      <Navbar />
      <Hero />
      <UpcomingEvent/>
      <Partners/>
        <CTA />
      <Testimonials />
    </>
  );
};

export default Home;
