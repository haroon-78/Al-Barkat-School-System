import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Principle from "../assets/images/Principle.jpeg";

function MissionPage() {
  const [count, setCount] = useState(0);

  // Counter Animation
  useEffect(() => {
    let start = 0;
    const end = 1200;
    const duration = 3000;
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 10;

      if (start >= end) {
        start = end;
        clearInterval(counter);
      }

      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="bg-gray-100 ">

            {/* Hero Section */}
      <section className="bg-blue-900 text-white py-17 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          VISION & MISSION
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
      Our vision is to nurture future leaders through quality education,
      discipline, moral values, and academic excellence for lifelong success.
        </p>

      </section>

      {/* Heading */}
      <div className="text-center mb-14 pt-24">

        <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
          PRINCIPAL MESSAGE
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mt-5">
          Principal’s
          <span className="text-orange-500">
            {" "}Vision & Mission
          </span>
        </h1>

        {/* Underline */}
        <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-4">
          Leadership, Discipline & Quality Education
        </p>

      </div>

      {/* Principal Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side Image */}
        <div className="flex flex-col items-center">

          <img
            src={Principle}
            alt="Principal"
            className="w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-blue-900"
          />

          {/* Name Under Image */}
          <h3 className="text-2xl font-bold text-blue-900 mt-4">
            Dr. Ahmed Khan
          </h3>

          <p className="text-gray-600">
            Principal
          </p>

        </div>

        {/* Right Side Vision & Mission */}
        <div className="space-y-6">

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-900 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Vision
            </h2>

            <p className="text-gray-600 leading-8">
              Our vision is to create future leaders who contribute positively
              to society through strong moral values, discipline, and modern
              education.
            </p>

          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-orange-500 hover:shadow-2xl transition duration-300">

            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Mission
            </h2>

            <p className="text-gray-600 leading-8">
              Our mission is to provide quality education that builds
              character, discipline, and academic excellence in every student.
            </p>

          </div>

        </div>

      </div>

      {/* Number of Students */}
      <div className="max-w-6xl mx-auto mt-14 text-center">

        <div className="bg-white p-8 rounded-3xl shadow-lg inline-block w-full md:w-1/2">

          <h2 className="text-2xl font-bold text-blue-900">
            Number of Students
          </h2>

          <p className="text-5xl font-bold text-orange-500 mt-4">
            {count}+
          </p>

          <p className="text-gray-600 mt-2">
            Enrolled Students across all campuses
          </p>

        </div>

      </div>

      {/* Campuses Section */}
      <div className="max-w-6xl mx-auto mt-20">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-blue-900">
            Our
            <span className="text-orange-500">
              {" "}Campuses
            </span>
          </h2>

          <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded"></span>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our campuses designed to provide quality education,
            discipline, creativity, and academic excellence.
          </p>

        </div>

        {/* Campus Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Main Campus */}
          <Link to="/main-campus" className="group">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 border-t-4 border-blue-900">

              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl mx-auto mb-5 group-hover:bg-orange-100 transition">
                🏫
              </div>

              <h3 className="text-2xl font-bold text-blue-900 text-center">
                Main Campus
              </h3>

              <p className="text-gray-600 mt-4 text-center leading-relaxed">
                Central hub of academic excellence with modern classrooms and experienced faculty.
              </p>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all duration-300">
                  Explore Campus →
                </span>
              </div>

            </div>

          </Link>

          {/* Jinnah Campus */}
          <Link to="/jinnah-campus" className="group">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 border-t-4 border-orange-500">

              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-3xl mx-auto mb-5 group-hover:bg-blue-100 transition">
                🎓
              </div>

              <h3 className="text-2xl font-bold text-orange-500 text-center">
                Jinnah Campus
              </h3>

              <p className="text-gray-600 mt-4 text-center leading-relaxed">
                A modern learning environment focused on innovation, creativity, and student growth.
              </p>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 text-blue-900 font-semibold group-hover:gap-4 transition-all duration-300">
                  Explore Campus →
                </span>
              </div>

            </div>

          </Link>

          {/* Secondary Campus */}
          <Link to="/secondary-campus" className="group">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 border-t-4 border-blue-900">

              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-3xl mx-auto mb-5 group-hover:bg-orange-100 transition">
                📚
              </div>

              <h3 className="text-2xl font-bold text-blue-900 text-center">
                Secondary Campus
              </h3>

              <p className="text-gray-600 mt-4 text-center leading-relaxed">
                Building strong academic foundations with discipline, confidence, and quality education.
              </p>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all duration-300">
                  Explore Campus →
                </span>
              </div>

            </div>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default MissionPage;