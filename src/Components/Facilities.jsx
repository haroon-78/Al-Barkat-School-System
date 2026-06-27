import {
  FaChalkboardTeacher,
  FaFlask,
  FaLaptopCode,
  FaBookReader,
  FaBasketballBall,
  FaPaintBrush,
  FaArrowRight,
} from "react-icons/fa";

function Facilities() {

  const facilities = [
    {
      title: "Modern Classrooms",
      icon: <FaChalkboardTeacher />,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Smart classrooms with digital boards, comfortable seating, and interactive learning environment.",
    },

    {
      title: "Science Laboratories",
      icon: <FaFlask />,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Fully equipped physics, chemistry, and biology labs for practical learning experience.",
    },

    {
      title: "Computer Lab",
      icon: <FaLaptopCode />,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Modern computer labs with updated systems, internet access, and latest technologies.",
    },

    {
      title: "Library",
      icon: <FaBookReader />,
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Extensive collection of books, journals, and digital resources for students.",
    },

    {
      title: "Sports Facilities",
      icon: <FaBasketballBall />,
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Indoor and outdoor sports facilities promoting teamwork and physical fitness.",
    },

    {
      title: "Art Studio",
      icon: <FaPaintBrush />,
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
      desc:
        "Creative environment for painting, music, crafts, and drama activities.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-20">

          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            OUR FACILITIES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-6 leading-tight">
            World-Class
            <span className="text-orange-500">
              {" "}Learning Facilities
            </span>
          </h2>

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 mt-8 text-lg max-w-3xl mx-auto leading-8">
            Our campus provides modern facilities designed to inspire learning,
            creativity, innovation, and overall student development.
          </p>

        </div>

        {/* FACILITY CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {facilities.map((item, index) => (

            <div
              key={index}
              className="group bg-white rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-[250px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* ICON */}
                <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-blue-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>

                {/* BUTTON */}
                <button className="mt-6 flex items-center gap-2 text-orange-500 font-semibold group/btn">

                  Explore More

                  <FaArrowRight className="text-sm transition duration-300 group-hover/btn:translate-x-2" />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Facilities;