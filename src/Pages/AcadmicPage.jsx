import { Link } from "react-router-dom";
import { FaBookOpen, FaArrowRight, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import {
  FaSchool,
  FaClipboardCheck,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";
import Facilities from "../Components/Facilities";
import PreSchool from "../../src/assets/images/Acadmic/Pre-School.jpeg"
import PrimarySchool from "../../src/assets/images/Acadmic/Primary-School.jpeg"
import MiddleSchool from "../../src/assets/images/Acadmic/Middle-School.jpeg"
import HighSchool from "../../src/assets/images/Acadmic/High-School.jpeg"
function AcademicLevels() {
  const levels = [
    {
      title: "Pre-School",
      age: "2-5 years",
      grade: "Playgroup to KG",
      students: "25",
      teachers: "3",
      color: "orange",
      image:
        PreSchool,
      desc:
        "Early childhood education focusing on play-based learning and basic skills development.",
      features: [
        "Creative Arts & Crafts",
        "Basic Literacy Skills",
        "Social Development",
        "Physical Activities",
        "Music & Movement",
        "Story Time",
      ],
      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "General Knowledge",
        "Islamic Studies",
      ],
    },

    {
      title: "Primary School",
      age: "6-10 years",
      grade: "Grade 1-5",
      students: "30",
      teachers: "5",
      color: "blue",
      image: PrimarySchool,
      desc:
        "Foundation education with core subjects and character building activities.",
      features: [
        "Core Academic Subjects",
        "Islamic Education",
        "Computer Literacy",
        "Physical Education",
        "Art & Craft",
        "Library Time",
      ],
      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Science",
        "Social Studies",
        "Islamic Studies",
        "Computer Science",
      ],
    },

    {
      title: "Middle School",
      age: "11-13 years",
      grade: "Grade 6-8",
      students: "35",
      teachers: "8",
      color: "orange",
      image: MiddleSchool,
      desc:
        "Intermediate education preparing students for higher academic challenges.",
      features: [
        "Advanced Subject Study",
        "Science Laboratory",
        "Library Research",
        "Sports Activities",
        "Debate & Discussion",
        "Project Work",
      ],
      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "History",
        "Geography",
        "Islamic Studies",
        "Computer Science",
      ],
    },

    {
      title: "High School",
      age: "14-17 years",
      grade: "Grade 9-12",
      students: "40",
      teachers: "12",
      color: "blue",
      image: HighSchool,
      desc:
        "Secondary education with specialization tracks and career preparation.",
      features: [
        "Subject Specialization",
        "Career Guidance",
        "Exam Preparation",
        "Leadership Programs",
        "Research Projects",
        "Internship Opportunities",
      ],
      subjects: [
        "English",
        "Urdu",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Economics",
        "Pakistan Studies",
        "Islamic Studies",
        "Computer Science",
        "Electives",
      ],
    },
  ];
  // Acadmic Calender
  const calendar = [
    {
      title: "Academic Year Start",
      date: "August 15",
      subtitle: "First Day of School",
      icon: FaSchool,
      color: "orange",
    },
    {
      title: "Mid-Term Exams",
      date: "October 15 - 25",
      subtitle: "Assessment Period",
      icon: FaClipboardCheck,
      color: "blue",
    },
    {
      title: "Annual Exams",
      date: "May 1 - 15",
      subtitle: "Final Assessment",
      icon: FaGraduationCap,
      color: "orange",
    },
    {
      title: "Graduation",
      date: "June 30",
      subtitle: "Ceremony & Results",
      icon: FaAward,
      color: "blue",
    },
  ];

  return (
    <section className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-17 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Excellence in Academics
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Discover our comprehensive academic programs designed to inspire
          learning, creativity, discipline, and future success for every student.
        </p>

      </section>


      <div className="max-w-7xl mx-auto px-6 pt-24">

        {/* HEADING */}
        <div className="text-center mb-14">

          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            EDUCATIONS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-6 leading-tight">
            Educational
            <span className="text-orange-500">
              {" "}Levels
            </span>
          </h2>

          {/* <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                        Educational <span className="text-orange-500">Levels</span>
                    </h2> */}

          <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Comprehensive education from early childhood to high school graduation
          </p>
        </div>

        {/* LEVEL CARDS */}
        <div className="space-y-24">

          {levels.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
            >

              {/* IMAGE SIDE WITH HOVER EFFECT */}
              <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl group relative">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/70 transition duration-500"></div>

                {/* TEXT ON HOVER */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-500">

                  <h3 className="text-white text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-white/90 mt-2 text-sm">
                    {item.grade}
                  </p>

                  <p className="text-white/80 text-sm mt-1">
                    Age: {item.age}
                  </p>

                </div>

              </div>

              {/* CONTENT SIDE */}
              <div className="bg-white p-7 md:p-6 rounded-3xl shadow-xl hover:shadow-2xl transition">

                <h3 className="text-3xl font-bold text-blue-900">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.grade} • {item.age}
                </p>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.desc}
                </p>

                <div className="flex justify-around mt-6">

                  {/* STUDENTS */}
                  <div className="flex flex-col items-center text-center gap-1">

                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
                      <FaUserGraduate />
                    </div>

                    <p className="text-3xl font-bold text-orange-500">
                      {item.students}
                    </p>

                    <p className="text-sm text-gray-500">Students</p>
                  </div>

                  {/* TEACHERS */}
                  <div className="flex flex-col items-center text-center gap-1">

                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-900 text-2xl">
                      <FaChalkboardTeacher />
                    </div>

                    <p className="text-3xl font-bold text-blue-900">
                      {item.teachers}
                    </p>

                    <p className="text-sm text-gray-500">Teachers</p>
                  </div>

                </div>

                <div className="mt-6 space-y-2">
                  {item.features.slice(0, 5).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaBookOpen className="text-orange-500 text-xs" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {item.subjects.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  className={`mt-7 flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group ${item.color === "orange"
                    ? "bg-orange-500 hover:bg-blue-900"
                    : "bg-blue-900 hover:bg-orange-500"
                    }`}
                >
                  Learn More
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
      {/* // Our Facilities */}
      <Facilities />
      {/* //Academic Calender */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
              Academic Schedule
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5">
              Academic <span className="text-orange-500">Calendar</span>
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-orange-400 to-blue-900 mx-auto mt-4 rounded-full"></div>

            <p className="text-slate-600 mt-5 max-w-2xl mx-auto text-lg">
              Important dates and events for the academic year
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {calendar.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-[30px] p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100"
                >

                  {/* Top Gradient */}
                  <div
                    className={`absolute top-0 left-0 w-full h-2 ${item.color === "orange"
                      ? "bg-gradient-to-r from-orange-400 to-orange-500"
                      : "bg-gradient-to-r from-blue-700 to-blue-900"
                      }`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-3xl flex items-center justify-center text-4xl transition-all duration-500 shadow-lg group-hover:scale-110 ${item.color === "orange"
                      ? "bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
                      : "bg-blue-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white"
                      }`}
                  >
                    <Icon />
                  </div>

                  {/* Date Badge */}
                  <div className="mt-6 inline-block bg-slate-100 px-4 py-2 rounded-full">
                    <p
                      className={`font-bold ${item.color === "orange"
                        ? "text-orange-500"
                        : "text-blue-900"
                        }`}
                    >
                      {item.date}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mt-5">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-slate-500 mt-3 leading-7">
                    {item.subtitle}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-200 opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition duration-500"></div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
      {/* // Ready To Join Classes */}
      <section className="py-10 px-6 bg-blue-900 relative overflow-hidden">

        {/* Background Glow Circles */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-orange-400 opacity-20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-[120px]"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">

          {/* Badge */}
          <span className="inline-block bg-white/10 text-orange-400 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            Admissions Open 2026
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
            Ready to Join Our{" "}
            <span className="text-orange-400">Classes?</span>
          </h2>

          {/* Description */}
          <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Give your child the best education with our experienced teachers,
            modern facilities, and a safe learning environment.
          </p>

          {/* Stats (optional premium touch) */}
          <div className="flex flex-wrap justify-center gap-10 mt-10 text-white">

            <div>
              <h3 className="text-3xl font-bold text-orange-400">1000+</h3>
              <p className="text-sm text-blue-200">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-400">50+</h3>
              <p className="text-sm text-blue-200">Teachers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-400">20+</h3>
              <p className="text-sm text-blue-200">Programs</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
            <Link to="/Contactpage">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                Apply Now
              </button>
            </Link>
            <button className="border border-white/40 text-white hover:bg-white hover:text-blue-950 px-10 py-4 rounded-2xl font-semibold transition">
              Schedule Visit
            </button>

          </div>

        </div>
      </section>
      <hr className="text-white"></hr>
    </section>
  );
}

export default AcademicLevels;