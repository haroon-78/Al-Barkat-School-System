// import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { FaComments, FaCalendarAlt, FaVideo } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import {
  // FaMapMarkerAlt, 
  // FaPhoneAlt, 
  // FaEnvelope,
  FaUserTie,
  FaArrowRight
} from "react-icons/fa";
import {
  FaUserGraduate,
  FaBookOpen,
  FaHandsHelping,
  FaMoneyBillWave,
  // FaEnvelope,
  // FaPhoneAlt,
  // FaArrowRight
} from "react-icons/fa";
function ContactSection() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Message Sent Successfully ✅");
  //   setForm({ name: "", email: "", message: "" });
  // };

  return (

    <section >

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-17 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          We are here to help you with admissions, academic information,
          and any questions you may have. Get in touch with us and our
          team will be happy to assist you.
        </p>

      </section>

      <section className="relative py-20 bg-gray-50 overflow-hidden" >

        {/* Background Glow (optional premium look) */}
        <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-orange-300 opacity-20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-[140px]"></div>

        {/* MAIN CONTENT */}
        <div className="max-w-6xl mx-auto relative z-10 text-center">

          {/* Badge */}
          <span className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            Contact Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            <span className="text-blue-800">Get in</span>{" "}
            <span className="text-orange-500">Touch</span>
          </h2>

          {/* Underline */}
          <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
            We’d love to hear from you! Whether you have questions about admissions,
            want to schedule a visit, or need more information about our programs,
            our team is here to help.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-orange-200 shadow-sm hover:bg-blue-800 hover:text-white hover:-translate-y-2 transition-all duration-300 text-left group">
              <h3 className="text-orange-500 group-hover:text-white text-xl font-bold">
                Admissions
              </h3>
              <p className="text-gray-600 group-hover:text-white mt-3 text-sm">
                Ask anything about admissions process and requirements.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-sm hover:bg-blue-800 hover:text-white hover:-translate-y-2 transition-all duration-300 text-left group">
              <h3 className="text-blue-600 group-hover:text-white text-xl font-bold">
                Visit School
              </h3>
              <p className="text-gray-600 group-hover:text-white mt-3 text-sm">
                Schedule a campus visit and explore our environment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-purple-200 shadow-sm hover:bg-blue-800 hover:text-white hover:-translate-y-2 transition-all duration-300 text-left group">
              <h3 className="text-purple-600 group-hover:text-white text-xl font-bold">
                Support
              </h3>
              <p className="text-gray-600 group-hover:text-white mt-3 text-sm">
                Get help regarding programs, fees or general queries.
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
              Apply Now
            </button>

            <button className="border border-gray-300 text-gray-800 hover:bg-blue-800 hover:text-white px-10 py-4 rounded-2xl font-semibold transition">
              Schedule Visit
            </button>

          </div>

        </div>
      </section>
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-orange-300/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-300/30 blur-[160px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-blue-800">Contact</span>{" "}
              <span className="text-orange-500">Information</span>
            </h2>

            <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-5">
              Reach out to us through any of these channels
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* ADDRESS */}
            <div className="bg-white rounded-3xl p-6 border-t-4 border-orange-500 shadow-sm text-center group hover:shadow-2xl transition-shadow duration-300">

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-3xl transition-all duration-300 
          group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg">

                <FaMapMarkerAlt />
              </div>

              <h3 className="text-lg font-bold mt-5 text-gray-900">
                Address
              </h3>

              <p className="text-black mt-2 text-sm leading-6">
                House#508/509 Opposite Nafees Sanitary Store Khanpur
              </p>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-3xl p-6 border-t-4 border-blue-500 shadow-sm text-center group hover:shadow-2xl transition-shadow duration-300">

              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-3xl transition-all duration-300 
          group-hover:bg-blue-800 group-hover:text-white group-hover:shadow-lg">

                <FaPhoneAlt />
              </div>

              <h3 className="text-lg font-bold mt-5 text-gray-900">
                Phone
              </h3>

              <p className="text-black mt-2 text-sm">
                +92 333 3321188
              </p>
            </div>

            {/* EMAIL */}
            <div className="bg-white rounded-3xl p-6 border-t-4 border-orange-500 shadow-sm text-center group hover:shadow-2xl transition-shadow duration-300">

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-3xl transition-all duration-300 
          group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg">

                <FaEnvelope />
              </div>

              <h3 className="text-lg font-bold mt-5 text-gray-900">
                Email
              </h3>

              <p className="text-black mt-2 text-sm">
                abssm130@gmail.com
              </p>
            </div>

            {/* OFFICE HOURS */}
            <div className="bg-white rounded-3xl p-6 border-t-4 border-blue-500 shadow-sm text-center group hover:shadow-2xl transition-shadow duration-300">

              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-3xl transition-all duration-300 
          group-hover:bg-blue-800 group-hover:text-white group-hover:shadow-lg">

                <FaClock />
              </div>

              <h3 className="text-lg font-bold mt-5 text-gray-900">
                Office Hours
              </h3>

              <p className="text-black mt-2 text-sm leading-6">
                Monday - Friday:8:00AM-5:00PM <br />
                Saturday : 9:00 AM - 2:00 PM <br />
                Sunday : Closed
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-300/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-blue-300/30 blur-[170px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-blue-800">Send us</span>{" "}
              <span className="text-orange-500">a Message</span>
            </h2>

            <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Have a question or need more information? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* GRID (UPDATED LAYOUT) */}
          <div className="grid lg:grid-cols-12 gap-10">

            {/* FORM - SMALLER WIDTH */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    First Name <span className="text-orange-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your first name"
                    className="w-full mt-2 p-4 rounded-2xl border border-gray-200 focus:border-blue-800 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Last Name <span className="text-orange-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your last name"
                    className="w-full mt-2 p-4 rounded-2xl border border-gray-200 focus:border-blue-800 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address <span className="text-orange-500">*</span>
                  </label>
                  <input type="email" placeholder="Enter your email address"
                    className="w-full mt-2 p-4 rounded-2xl border border-gray-200 focus:border-blue-800 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input type="text" placeholder="Enter your phone number"
                    className="w-full mt-2 p-4 rounded-2xl border border-gray-200 focus:border-blue-800 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>

              </div>

              <div className="mt-5">
                <label className="text-sm font-semibold text-gray-700">
                  Subject <span className="text-orange-500">*</span>
                </label>
                <select className="w-full mt-2 p-4 rounded-2xl border border-gray-200 focus:border-blue-800 focus:ring-2 focus:ring-blue-100 outline-none transition">
                  <option>Select a subject</option>
                  <option>Admissions</option>
                  <option>Visit School</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="text-sm font-semibold text-gray-700">
                  Message <span className="text-orange-500">*</span>
                </label>
                <textarea rows="5" placeholder="Enter your message here..."
                  className="w-full mt-2 p-4 rounded-2xl border border-gray-200 focus:border-blue-800 focus:ring-2 focus:ring-blue-100 outline-none transition" />
              </div>

              {/* BUTTON WITH ICON */}
              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition flex items-center justify-center gap-2">

                <FaPaperPlane className="text-white" />
                Send Message

              </button>

            </div>

            {/* QUICK CONTACT - BIGGER WIDTH */}
            <div className="lg:col-span-5 bg-blue-900 rounded-3xl p-8 shadow-xl border border-gray-100">

              <h3 className="text-xl font-bold text-orange-500 mb-2">
                Quick Contact
              </h3>

              <p className="text-white text-sm mb-6">
                For immediate assistance, you can reach us directly through these channels.
              </p>

              {/* CARD 1 */}
              <div className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition mb-5 flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
                  <FaComments />
                </div>

                <div>
                  <h4 className="font-bold text-white">Live Chat</h4>
                  <p className="text-sm text-gray-200 mt-1">
                    Available Monday-Friday, 9 AM - 5 PM
                  </p>
                  <button className="mt-3 text-orange-400 font-semibold text-sm hover:underline">
                    Start Chat
                  </button>
                </div>

              </div>

              {/* CARD 2 */}
              <div className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition mb-5 flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
                  <FaCalendarAlt />
                </div>

                <div>
                  <h4 className="font-bold text-white">Schedule Visit</h4>
                  <p className="text-sm text-gray-200 mt-1">
                    Book a campus tour and meet our team
                  </p>
                  <button className="mt-3 text-orange-400 font-semibold text-sm hover:underline">
                    Book Now
                  </button>
                </div>

              </div>

              {/* CARD 3 */}
              <div className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 transition flex items-start gap-4">

                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl">
                  <FaVideo />
                </div>

                <div>
                  <h4 className="font-bold text-white">Virtual Meeting</h4>
                  <p className="text-sm text-gray-200 mt-1">
                    Schedule an online consultation
                  </p>
                  <button className="mt-3 text-orange-400 font-semibold text-sm hover:underline">
                    Join Now
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      {/* // Campus Location */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-300/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-blue-300/30 blur-[170px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-blue-800">Our Campus</span>{" "}
              <span className="text-orange-500">Locations</span>
            </h2>

            <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-5">
              Visit any of our three campuses across Karachi
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Main Campus",
                principal: "Dr. Ahmed Khan",
                address: "123 Main Street, Karachi",
                phone: "+92 21 1234567",
                email: "main@albarkatschool.edu.pk",
                map: "https://www.google.com/maps?q=123+Main+Street+Karachi",
                embed:
                  "https://maps.google.com/maps?q=123+Main+Street+Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed",
              },
              {
                title: "North Campus",
                principal: "Ms. Sarah Ahmed",
                address: "456 North Avenue, Karachi",
                phone: "+92 21 1234568",
                email: "north@albarkatschool.edu.pk",
                map: "https://www.google.com/maps?q=456+North+Avenue+Karachi",
                embed:
                  "https://maps.google.com/maps?q=456+North+Avenue+Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed",
              },
              {
                title: "South Campus",
                principal: "Mr. Hassan Ali",
                address: "789 South Road, Karachi",
                phone: "+92 21 1234569",
                email: "south@albarkatschool.edu.pk",
                map: "https://www.google.com/maps?q=789+South+Road+Karachi",
                embed:
                  "https://maps.google.com/maps?q=789+South+Road+Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed",
              },
            ].map((campus, i) => (

              <div
                key={i}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >

                {/* TOP BORDER */}
                <div className="h-2 bg-blue-800"></div>

                {/* GOOGLE MAP */}
                <a
                  href={campus.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-36 overflow-hidden group"
                >
                  <iframe
                    src={campus.embed}
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="bg-white/90 text-blue-800 px-4 py-2 rounded-full font-semibold shadow-lg">
                      🗺️ Open in Google Maps
                    </span>
                  </div>
                </a>

                <div className="p-6 text-center">

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    {campus.title}
                  </h3>

                  {/* PRINCIPAL */}
                  <div className="flex flex-col items-center">

                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl shadow-md hover:bg-orange-500 hover:text-white transition">
                      <FaUserTie />
                    </div>

                    <p className="mt-3 font-bold text-gray-900">
                      Principal:{" "}
                      <span className="text-orange-500">
                        {campus.principal}
                      </span>
                    </p>

                  </div>

                  {/* INFO */}
                  <div className="mt-4 space-y-3 text-gray-700 text-sm text-left">

                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-orange-500" />
                      {campus.address}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaPhoneAlt className="text-orange-500" />
                      {campus.phone}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaEnvelope className="text-orange-500" />
                      {campus.email}
                    </p>

                  </div>

                  {/* BUTTON */}
                  <a
                    href={campus.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-2xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] transition"
                  >
                    Get Directions <FaArrowRight />
                  </a>

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>
      {/* // Department contact */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-300/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-orange-300/20 blur-[170px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* HEADING */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800">
              Department <span className="text-orange-500">Contacts</span>
            </h2>

            <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Admissions",
                desc: "For enrollment inquiries and application process",
                email: "admissions@albarkatschool.edu.pk",
                phone: "+92 21 1234567 ext. 101",
                icon: <FaUserGraduate />
              },
              {
                title: "Academic Affairs",
                desc: "For curriculum and academic program information",
                email: "academic@albarkatschool.edu.pk",
                phone: "+92 21 1234567 ext. 102",
                icon: <FaBookOpen />
              },
              {
                title: "Student Services",
                desc: "For student support and welfare services",
                email: "students@albarkatschool.edu.pk",
                phone: "+92 21 1234567 ext. 103",
                icon: <FaHandsHelping />
              },
              {
                title: "Finance",
                desc: "For fee payments and financial assistance",
                email: "finance@albarkatschool.edu.pk",
                phone: "+92 21 1234567 ext. 104",
                icon: <FaMoneyBillWave />
              },
            ].map((dept, i) => (

              <div
                key={i}
                className="group bg-white rounded-[28px] border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >

                {/* TOP BORDER (ALTERNATING COLORS) */}
                <div className={`h-2 ${i % 2 === 0 ? "bg-blue-800" : "bg-orange-500"}`}></div>

                <div className="p-5 flex flex-col md:flex-row gap-4 items-start">

                  {/* ICON */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-500 text-2xl flex items-center justify-center shadow-md group-hover:bg-orange-500 group-hover:text-white transition duration-500">
                      {dept.icon}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-center md:text-left">

                    <h3 className="text-xl font-bold text-blue-800">
                      {dept.title}
                    </h3>

                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      {dept.desc}
                    </p>

                    <div className="mt-3 space-y-2">

                      <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-2">
                        <FaEnvelope className="text-orange-500 mt-1 flex-shrink-0 text-sm" />
                        <p className="text-sm text-gray-700 break-all">
                          {dept.email}
                        </p>
                      </div>

                      <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-2">
                        <FaPhoneAlt className="text-orange-500 mt-1 flex-shrink-0 text-sm" />
                        <p className="text-sm text-gray-700">
                          {dept.phone}
                        </p>
                      </div>

                    </div>

                    {/* BUTTON */}
                    <button className="mt-4 w-full md:w-fit bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition duration-300">
                      Contact Department
                      <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* // Ready to Get Started */}
      <section className="py-24 bg-blue-900 w-screem relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-orange-300/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[480px] h-[480px] bg-blue-300/20 blur-[170px] rounded-full"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Get Started?
          </h2>

          {/* LINE */}
          <div className="w-32 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

          {/* DESCRIPTION */}
          <p className="text-white mt-6 text-lg leading-relaxed">
            Don't wait! Contact us today to begin your child's educational journey
            with Al-Barkat School System.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

            {/* APPLY NOW */}
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-xl transition duration-300 flex items-center gap-2">
              Apply Now
            </button>

            {/* SCHEDULE VISIT */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-md hover:shadow-xl transition duration-300 flex items-center gap-2">
              Schedule Visit
            </button>

          </div>

        </div>
      </section>
      <hr className="text-white"></hr>
    </section>
  );
}

export default ContactSection;
