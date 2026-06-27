import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Principle from "../../assets/images/Principle.jpeg"
import Viceprinciple from "../../assets/images/Faculty/Viceprinciple.jpeg"
import Hacadmic from "../../assets/images/Faculty/Hacadmic.jpeg"
import Counselor from "../../assets/images/Faculty/Counselor.jpeg"
function LeadershipTeam() {
  const [selected, setSelected] = useState(null);

  const leaders = [
    {
      image:Principle ,
      name: "Dr. Ahmed Khan",
      role: "Principal",
      desc: "20+ years of experience in educational leadership and student development.",
    },
    {
      image:Viceprinciple,
      name: "Ms. Sarah Ahmed",
      role: "Vice Principal",
      desc: "Specialized in curriculum development and modern academic management.",
    },
    {
      image:Hacadmic,
      name: "Mr. Hassan Ali",
      role: "Head of Academics",
      desc: "Expert in modern teaching methodologies and assessment systems.",
    },
    {
      image:Counselor,
      name: "Ms. Fatima Khan",
      role: "Student Counselor",
      desc: "Dedicated to student welfare, confidence building, and career guidance.",
    },
  ];

  return (
    <section className="py-28 bg-gray-50 overflow-hidden">

      {/* BADGE CENTER */}
      <div className="flex justify-center">
        <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
          OUR TEAM
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6">

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
            Leadership <span className="text-orange-500">Team</span>
          </h2>

          {/* UNDERLINE */}
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>

          <p className="text-gray-600 mt-4">
            Click any card to view profile
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="relative overflow-hidden">

          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex gap-8 w-max animate-scroll">

            {[...leaders, ...leaders].map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(item)}
                className="min-w-[280px] h-[380px] rounded-3xl overflow-hidden shadow-xl cursor-pointer relative group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-orange-300">{item.role}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] md:w-[500px] rounded-3xl p-6 relative">

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              <FaTimes />
            </button>

            <img
              src={selected.image}
              className="w-full h-64 object-cover rounded-2xl mb-5"
            />

            <h2 className="text-2xl font-bold text-blue-800">
              {selected.name}
            </h2>

            <p className="text-orange-500 font-semibold mt-1">
              {selected.role}
            </p>

            <p className="text-gray-600 mt-4 leading-7">
              {selected.desc}
            </p>

          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
}

export default LeadershipTeam;