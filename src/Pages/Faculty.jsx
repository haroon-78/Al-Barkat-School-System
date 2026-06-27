import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import FacultySection from "../Components/Faculty/FacultySection"

function FacultyPage() {
  const [selected, setSelected] = useState(null);

  const faculty = [
    {
      id: 1,
      name: "Dr. Ahmed Khan",
      role: "Professor - Computer Science",
      bio: "Expert in AI, Machine Learning, Web Development and modern software systems.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      email: "ahmed@college.com",
    },
    {
      id: 2,
      name: "Dr. Sarah Ali",
      role: "Lecturer - Business",
      bio: "Specialist in marketing, leadership and business strategy development.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      email: "sarah@college.com",
    },
    {
      id: 3,
      name: "Dr. Usman Tariq",
      role: "Assistant Professor - Engineering",
      bio: "Expert in civil engineering, structures and modern construction techniques.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      email: "usman@college.com",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-17 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Meet Our Expert Faculty
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Our highly qualified and experienced faculty members are dedicated
            to inspiring students, building confidence, and delivering quality
            education for future success.
        </p>

      </section>

      {/* // FacultySections */}
      <FacultySection/>

      {/* HEADING SECTION */}
      <section className="py-16 text-center">

        <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold">
          OUR TEACHERS
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-5">
          Meet Our
          <span className="text-orange-500">
            {" "}Faculty
          </span>
        </h2>

        <div className="w-32 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
          Highly qualified and experienced teachers committed to
          academic excellence and student success.
        </p>
      </section>

      {/* FACULTY CARDS */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {faculty.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-[35px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden h-[340px]">

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-8">

                {/* SOCIAL ICONS */}
                <div className="flex gap-4">

                  <button className="bg-white text-blue-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                    <FaFacebookF />
                  </button>

                  <button className="bg-white text-blue-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                    <FaLinkedinIn />
                  </button>

                  <button className="bg-white text-blue-900 p-3 rounded-full hover:bg-orange-500 hover:text-white transition">
                    <FaEnvelope />
                  </button>

                </div>

              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 text-center">

              <h2 className="text-2xl font-bold text-blue-950">
                {item.name}
              </h2>

              <span className="inline-block mt-3 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                {item.role}
              </span>

              <p className="text-gray-600 mt-5 leading-relaxed">
                {item.bio.substring(0, 85)}...
              </p>

              {/* SHINY BUTTON */}
              <button
                onClick={() => setSelected(item)}
                className="mt-7 relative overflow-hidden bg-blue-950 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition duration-300"
              >
                View Profile
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* PREMIUM MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-5">

          <div className="bg-white rounded-[35px] max-w-md w-full p-8 relative shadow-2xl animate-[fadeIn_.3s_ease]">

            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-xl"
            >
              <FaTimes />
            </button>

            {/* IMAGE */}
            <img
              src={selected.img}
              alt={selected.name}
              className="w-40 h-40 rounded-full mx-auto border-[6px] border-orange-500 shadow-xl object-cover"
            />

            {/* INFO */}
            <h2 className="text-3xl font-bold text-center text-blue-950 mt-5">
              {selected.name}
            </h2>

            <p className="text-center mt-2 text-orange-500 font-semibold">
              {selected.role}
            </p>

            <p className="text-gray-600 mt-6 text-center leading-relaxed">
              {selected.bio}
            </p>

            <div className="mt-5 text-center text-blue-950 font-medium">
              📧 {selected.email}
            </div>

            <button
              onClick={() => setSelected(null)}
              className="w-full mt-8 bg-blue-950 text-white py-3 rounded-full hover:bg-orange-500 transition font-semibold"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default FacultyPage;