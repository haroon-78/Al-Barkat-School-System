import { useState } from "react";
//Logo
import Logo from '../../assets/Logo.png'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FiAlignLeft } from "react-icons/fi";

function Navbar() {

    const [showInput, setShowInput] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-blue-900 text-white py-4 px-4 relative ">

            <nav className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src={Logo}
                        alt="School Logo"
                        className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                    />

                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-white">
                            Al-Barkat School System
                        </h1>

                        <p className="text-sm text-white">
                            Excellence in Education
                        </p>
                    </div>
                </div>



                {/* Desktop + Tablet Menu */}
                <ul className="hidden lg:flex items-center gap-6 xl:gap-5 text-sm">

                    <li><Link to="/" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Home</Link></li>

                    <li><Link to="/Aboutpage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">About Us</Link></li>

                    <li><Link to="/Admissionpage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Admissions</Link></li>

                    <li><Link to="/AcadmicPage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Academics</Link></li>

                    <li><Link to="/Missionpage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Vision & Mission</Link></li>

                    <li><Link to="/Facultypage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Faculty</Link></li>

                    <li><Link to="/Eventspage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Events</Link></li>

                    <li><Link to="/Contactpage" className="relative hover:text-orange-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full">Contact Us</Link></li>


                    <div className="relative">
                        <button
                            onClick={() => setShowInput(!showInput)}
                            className="text-2xl bg-white text-blue-900 rounded-full p-2 hover:bg-orange-500 hover:text-white"
                        >
                            {showInput ? <IoClose /> : <CiSearch />}
                        </button>

                        {
                            showInput &&
                            <input
                                type="text"
                                placeholder="Search..."
                                className="absolute top-14 right-0 px-4 py-2 rounded text-black shadow z-50 bg-white"
                            />
                        }
                    </div>


                    <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-orange-500 hover:text-white">
                        Apply Now
                    </button>

                </ul>



                {/* Tablet buttons only */}
                <div className="hidden md:flex lg:hidden items-center gap-4">

                    <button
                        onClick={() => setShowInput(!showInput)}
                        className="bg-white text-blue-900 rounded-full p-2 text-xl"
                    >
                        {showInput ? <IoClose /> : <CiSearch />}
                    </button>

                    <button className="bg-white text-blue-900 px-4 py-2 rounded">
                        Apply
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-3xl"
                    >
                        <FiAlignLeft />
                    </button>

                </div>



                {/* Mobile menu icon */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FiAlignLeft />
                </button>

            </nav>



            {/* Search Tablet */}
            {
                showInput &&
                <div className="hidden md:block lg:hidden mt-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded text-black"
                    />
                </div>
            }



            {/* Mobile + Tablet Dropdown */}
            {
                menuOpen && (
                    <div className="lg:hidden bg-white text-black mt-4 rounded p-6 shadow-lg">

                        <ul className="space-y-5 text-lg">
                            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
                            <li><Link to="/Aboutpage" className="hover:text-orange-400">About</Link></li>
                            <li><Link to="/Admissionpage" className="hover:text-orange-400">Admissions</Link></li>
                            <li><Link to="/AcadmicPage" className="hover:text-orange-400">Admissions</Link></li>
                            <li><Link to="/Missionpage" className="hover:text-orange-400">VisionMission</Link></li>
                            <li><Link to="/Facultypage" className="hover:text-orange-400">Faculty</Link></li>
                            <li><Link to="/Eventspage" className="hover:text-orange-400">Events</Link></li>
                            <li><Link to="/Contactpage" className="hover:text-orange-400">Contact</Link></li>
                        </ul>


                        <div className="mt-6 flex gap-4 items-center">

                            <button
                                onClick={() => setShowInput(!showInput)}
                                className="bg-orange-500 rounded-full p-2 text-2xl text-white"
                            >
                                {showInput ? <IoClose /> : <CiSearch />}
                            </button>

                            <button className="bg-blue-900 text-white px-4 py-2 rounded">
                                Apply Now
                            </button>

                        </div>


                        {
                            showInput &&
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full mt-4 border px-4 py-2 rounded z-10"
                            />
                        }

                    </div>
                )
            }

        </header>
    )

}

export default Navbar;