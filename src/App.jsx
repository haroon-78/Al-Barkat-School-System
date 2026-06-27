import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./Components/Topbar/TopBar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/FooterSection";

// Pages
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import VisionMission from "./Pages/Missionpage";
import Admission from "./Pages/Admissionpage";
import Acadmic from "./Pages/AcadmicPage";
import Faculty from "./Pages/Faculty";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";
// Campuses Page
import MainCampus from "./Pages/MainCampus";
import JinnahCampus from "./Pages/JinnahCampus";
import SecondaryCampus from "./Pages/SecondaryCampus";
function App() {
  return (
    <BrowserRouter>

      {/* Common Layout */}
      <TopBar />
      <hr className="w-full text-white"></hr>
      <Navbar />

      {/* Pages Routing */}
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/Aboutpage" element={<AboutPage />} />

        {/* Admission Page */}
        <Route path="/Admissionpage" element={<Admission />} />

         {/* Acadmic Page */}
        <Route path="/AcadmicPage" element={<Acadmic />} />

        {/* MissionVission Page */}
        <Route path="/Missionpage" element={<VisionMission />} />

        {/* Faculty Page */}
        <Route path="/Facultypage" element={<Faculty />} />

        {/* Events Page */}
        <Route path="/Eventspage" element={<Events />} />

        {/* Contact Page */}
        <Route path="/Contactpage" element={<Contact />} />

        {/* Main Campus */}
        <Route path="/main-campus" element={<MainCampus />} />
        {/* Jinnah Campus */}
        <Route path="/jinnah-campus" element={<JinnahCampus />} />
        {/* Secondary Campus */}
        <Route path="/secondary-campus" element={<SecondaryCampus />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
