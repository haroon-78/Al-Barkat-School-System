import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  FaChild,
  FaBook,
  FaFlask,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaFileAlt,
  FaIdCard,
  // FaUserFriends,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  //  FaCheckCircle, 
   FaMoneyBillWave } from "react-icons/fa";
// Function 
function AdmissionsPage() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: <FaChild />,
      title: "Pre-School",
      age: "2–5 Years",
      class: "Playgroup - KG",
      desc: "Early childhood learning through creative play-based activities.",
      features: ["Creative Learning", "Basic Literacy", "Social Skills"],
      color: "border-blue-800",
    },
    {
      icon: <FaBook />,
      title: "Primary School",
      age: "6–10 Years",
      class: "Grade 1 - 5",
      desc: "Strong academic foundation with modern learning techniques.",
      features: ["Core Subjects", "Islamic Studies", "Computer Basics"],
      color: "border-orange-500",
    },
    {
      icon: <FaFlask />,
      title: "Middle School",
      age: "11–13 Years",
      class: "Grade 6 - 8",
      desc: "Advanced education preparing students for higher studies.",
      features: ["Science Lab", "Library Access", "Sports"],
      color: "border-blue-800",
    },
    {
      icon: <FaUserGraduate />,
      title: "High School",
      age: "14–17 Years",
      class: "Grade 9 - 12",
      desc: "Focused on exams, career guidance and leadership skills.",
      features: ["Exam Prep", "Career Guidance", "Leadership"],
      color: "border-orange-500",
    },
  ];

   const documents = [
    "Birth Certificate (Original + Copy)",
    "Previous School Records / Transcripts",
    "Student CNIC / B-Form",
    "Parents / Guardians CNIC",
    "Passport Size Photographs (4 copies)",
    "Medical Certificate",
    "Character Certificate",
    "Transfer Certificate (if applicable)",
  ];

  const timeline = [
    {
      icon: <FaCalendarAlt />,
      title: "Application Period",
      date: "January - March 2024",
      color: "blue",
    },
    {
      icon: <FaFileAlt />,
      title: "Assessment Period",
      date: "April 2024",
      color: "orange",
    },
    {
      icon: <FaCheckCircle />,
      title: "Results Announcement",
      date: "May 2024",
      color: "blue",
    },
    {
      icon: <FaIdCard />,
      title: "Session Start",
      date: "August 2024",
      color: "orange",
    },
  ];

   const fees = [
    {
      title: "Pre-School",
      age: "2–5 Years",
      price: "PKR 8,000",
      features: [
        "Tuition Fee",
        "Books & Stationery",
        "Lab Charges",
        "Library Access",
      ],
      color: "border-blue-800",
    },
    {
      title: "Primary School",
      age: "6–10 Years",
      price: "PKR 12,000",
      features: [
        "Tuition Fee",
        "Books & Stationery",
        "Lab Charges",
        "Library Access",
      ],
      color: "border-orange-500",
    },
    {
      title: "Middle School",
      age: "11–13 Years",
      price: "PKR 15,000",
      features: [
        "Tuition Fee",
        "Books & Stationery",
        "Lab Charges",
        "Library Access",
      ],
      color: "border-blue-800",
    },
    {
      title: "High School",
      age: "14–17 Years",
      price: "PKR 18,000",
      features: [
        "Tuition Fee",
        "Books & Stationery",
        "Lab Charges",
        "Library Access",
      ],
      color: "border-orange-500",
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Admissions Open
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Apply now and become part of our prestigious college community.
        </p>

      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Admission <span className="text-orange-500">Process</span>
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Our simple admission process ensures transparency and a smooth experience for parents and students.
            </p>
          </div>


          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8">

            {/* Step 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center relative">

              <div className="text-3xl font-bold text-white bg-blue-900 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                01
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Application Submission
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Fill out admission form with required documents like B-Form, photos, and previous school record.
              </p>

            </div>


            {/* Step 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">

              <div className="text-3xl font-bold text-white bg-orange-500 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                02
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Document Verification
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Our admission office carefully verifies all submitted documents and eligibility.
              </p>

            </div>


            {/* Step 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">

              <div className="text-3xl font-bold text-white bg-blue-900 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                03
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Entrance Test / Interview
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Student appears in basic assessment test or interview depending on class level.
              </p>

            </div>


            {/* Step 4 */}
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center">

              <div className="text-3xl font-bold text-white bg-orange-500 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
                04
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Final Admission
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Admission confirmation is issued along with fee structure and class schedule.
              </p>

            </div>

          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <Link to="/Contactpage">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-orange-500 transition font-semibold">
              Apply Now
            </button>
            </Link>
          </div>

        </div>

      </section>

      <section ref={ref} className="py-28 bg-gray-50">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Programs <span className="text-orange-500">Offered</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Comprehensive educational programs designed for every stage of learning
          </p>
        </div>


        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {programs.map((p, i) => (
            <div
              key={i}
              className={`relative bg-white p-7 rounded-3xl border-t-4 ${p.color}
            shadow-md transition-all duration-500
            hover:-translate-y-3 hover:shadow-2xl group
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >

              {/* ICON */}
              <div className="text-3xl text-blue-800 mb-4 group-hover:scale-110 transition">
                {p.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-blue-900">
                {p.title}
              </h3>

              <p className="text-orange-500 font-semibold text-sm mt-1">
                {p.class}
              </p>

              <p className="text-gray-600 text-sm mt-2">
                Age: {p.age}
              </p>

              <p className="text-gray-600 mt-3 text-sm leading-6">
                {p.desc}
              </p>

              {/* FEATURES */}
              <div className="mt-4 space-y-1 text-sm text-gray-700">
                {p.features.map((f, idx) => (
                  <p key={idx}>✔ {f}</p>
                ))}
              </div>

              {/* BUTTON */}
              <Link to="/Contactpage">
              <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-white bg-blue-800 px-4 py-2 rounded-xl hover:bg-orange-500 transition w-full justify-center">
                Apply Now <FaArrowRight />
              </button>
              </Link>
            </div>
          ))}

        </div>

      </section>

      <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Admission <span className="text-orange-500">Requirements</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Please prepare all required documents before submitting your admission application
          </p>
        </div>


        {/* DOCUMENTS */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* Left */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">

            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
              <FaFileAlt className="text-orange-500" />
              Required Documents
            </h3>

            <ul className="space-y-4 text-gray-700">

              {documents.map((doc, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 hover:text-blue-900 transition"
                >
                  <FaCheckCircle className="text-orange-500 mt-1" />
                  {doc}
                </li>
              ))}

            </ul>

          </div>


          {/* Right */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-10 rounded-3xl shadow-2xl text-white">

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaCalendarAlt className="text-orange-400" />
              Admission Timeline
            </h3>

            <div className="space-y-6">

              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition"
                >

                  <div className="text-2xl text-orange-400">
                    {t.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      {t.title}
                    </h4>
                    <p className="text-white/70 text-sm mt-1">
                      {t.date}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
{/* // Fee Structures */}
 <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Fee <span className="text-orange-500">Structure</span>
          </h2>

          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Affordable education with transparent and flexible fee structure for all classes
          </p>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {fees.map((item, i) => (
            <div
              key={i}
              className={`bg-white p-8 rounded-3xl shadow-md border-t-4 ${item.color}
              hover:-translate-y-3 hover:shadow-2xl transition duration-500 group`}
            >

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900">
                {item.title}
              </h3>

              <p className="text-sm text-orange-500 font-semibold mt-1">
                {item.age}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-center gap-2 text-blue-900 font-bold text-2xl">
                <FaMoneyBillWave className="text-orange-500" />
                {item.price}
              </div>

              <p className="text-gray-500 text-sm mt-1">
                Per Month
              </p>

              {/* Features */}
              <div className="mt-6 space-y-2 text-sm text-gray-700">

                {item.features.map((f, idx) => (
                  <p key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-orange-500 text-xs" />
                    {f}
                  </p>
                ))}

              </div>

              {/* Button */}
              <Link to="/Contactpage">
              <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-xl hover:bg-orange-500 transition">
                Apply Now
              </button>
             </Link>
            </div>
          ))}

        </div>

      </div>

    </section>

    </div>
  );
}

export default AdmissionsPage;
