import Heroimg from '../../assets/images/Hero/SchoolBuilding.png'
import Typewriter from "typewriter-effect";
import { FaUserGraduate, FaBook, FaUniversity } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
      <div className='relative'>
        <section
          style={{
            backgroundImage: `url(${Heroimg})`
          }}
          className="relative h-screen bg-cover bg-center flex items-center justify-center"
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center">

            {/* Typewriter Heading */}
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">

              <Typewriter
                options={{
                  autoStart: true,
                  loop: true
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Welcome To <span style='color:orange'>Al-Barkat School System</span>"
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "Admissions <span style='color:orange'>Open Now</span>"
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "Build Your <span style='color:orange'>Future With Us</span>"
                    )
                    .start();
                }}
              />
            </h1>

            {/* Button */}
            <Link to="/Contactpage">
              <button className="bg-blue-900 text-white px-6 py-4 rounded-lg hover:bg-orange-500 transition duration-300 shadow-lg">
                Apply Now
              </button>
            </Link>

          </div>
        </section>

        {/* Floating Cards */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-80px] w-full px-4 hidden md:block">

          <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6">

            <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-full sm:w-1/2 md:w-40 text-center">
              <FaUserGraduate className="text-3xl text-blue-900 mx-auto" />
              <p className="mt-2 font-semibold">Students</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-full sm:w-1/2 md:w-40 text-center">
              <FaBook className="text-3xl text-orange-500 mx-auto" />
              <p className="mt-2 font-semibold">Courses</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-4 md:p-6 w-full sm:w-1/2 md:w-40 text-center">
              <FaUniversity className="text-3xl text-blue-900 mx-auto" />
              <p className="mt-2 font-semibold">Campus</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
