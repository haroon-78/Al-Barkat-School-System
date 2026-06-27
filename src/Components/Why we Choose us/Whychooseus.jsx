import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBookReader,
  FaFutbol,
  FaHandHoldingUsd
} from "react-icons/fa";

function Whychooseus() {

  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Qualified Teachers",
      desc: "Highly experienced and trained faculty ensuring quality education for every student."
    },
    {
      icon: <FaLaptopCode />,
      title: "Computer & Science Lab",
      desc: "Modern labs for practical learning in science, IT, and technology."
    },
    {
      icon: <FaBookReader />,
      title: "Islamic & Moral Education",
      desc: "Strong focus on Islamic values, ethics, and character building."
    },
    {
      icon: <FaFutbol />,
      title: "Sports Activities",
      desc: "Encouraging physical fitness through sports, games, and competitions."
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Need Based Scholarships",
      desc: "Financial support and scholarships for deserving and talented students."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* SMALL BADGE */}
        <div className="flex justify-center mb-4">
          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            WHY CHOOSE US
          </span>
        </div>

        {/* HEADING */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Our <span className="text-orange-500">Strengths</span>
          </h2>

          {/* UNDERLINE */}
          <div className="flex justify-center mt-4">
            <div className="h-1 w-28 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Al-Barkat School System provides a balanced environment of academic excellence,
            discipline, and character building.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg text-center 
              hover:-translate-y-3 hover:shadow-2xl transition duration-300 group"
            >

              {/* ICON */}
              <div className="text-5xl text-orange-500 mb-5 flex justify-center group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Whychooseus;