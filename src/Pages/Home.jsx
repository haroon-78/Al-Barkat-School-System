import Hero from "../Components/Hero/Hero";
import About from "../Components/About/AboutSection";
import Whychooseus from "../Components/Why we Choose us/Whychooseus";
import CounterUp from "../Components/Counterup"
import FacultySection from "../Components/Faculty/FacultySection";
import TestimonialSection from "../Components/Testimonails/TestimonialSection";
import FacilitiesSection from "../Components/Facilities";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Whychooseus />
      <CounterUp/>
      <FacultySection />
      <FacilitiesSection/>
      <TestimonialSection />
    </>
  );
}

export default Home;