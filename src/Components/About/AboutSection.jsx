import { Link } from "react-router-dom";
import About from '../../assets/images/About/About.jpeg'
import Assembly from '../../assets/images/About/assembly.jpg'
import Students from '../../assets/images/About/students.png'

import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";

function AboutSection() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="py-24 bg-gray-50 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* IMAGES */}
            <div className="space-y-5">

              <img
                src={About}
                alt="Al Barkat School"
                className="w-full h-[360px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="grid grid-cols-2 gap-4">

                <img
                  src={Assembly}
                  alt="Assembly"
                  className="h-44 w-full object-cover rounded-2xl shadow-lg"
                />

                <img
                  src={Students}
                  alt="Students"
                  className="h-44 w-full object-cover rounded-2xl shadow-lg"
                />

              </div>

            </div>


            {/* CONTENT */}
            <div>

              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                About{" "}
                <span className="text-orange-500">Al-Barkat School System</span>
              </h2>

              <div className="w-24 h-1 bg-orange-500 rounded mb-6"></div>

              <p className="text-gray-600 leading-8 mb-5">
                Established in 1999, Al-Barkat School System has been committed
                to providing quality education, moral values, and academic excellence.
              </p>

              <p className="text-gray-600 leading-8 mb-8">
                We provide a safe, caring, and inspiring learning environment where
                students grow academically, morally, and socially from Montessori to Matric.
              </p>


              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">

                <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-xl border-l-4 border-orange-500 hover:shadow-xl transition">
                  <FaUserGraduate className="text-orange-500 text-xl" />
                  Qualified Teachers
                </div>

                <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-xl border-l-4 border-blue-900 hover:shadow-xl transition">
                  <FaChalkboardTeacher className="text-blue-900 text-xl" />
                  Computer & Science Lab
                </div>

                <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-xl border-l-4 border-orange-500 hover:shadow-xl transition">
                  <FaBookOpen className="text-orange-500 text-xl" />
                  Islamic & Moral Education
                </div>

                <div className="flex items-center gap-3 bg-white shadow-md p-4 rounded-xl border-l-4 border-blue-900 hover:shadow-xl transition">
                  <FaUserGraduate className="text-blue-900 text-xl" />
                  Sports Activities
                </div>

              </div>


              {/* BUTTON */}
              <Link to="/Aboutpage">
              <button  className="bg-blue-900 text-white px-7 py-3 rounded-xl hover:bg-orange-500 transition">
                Explore Our School
              </button>
              </Link>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection