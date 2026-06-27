import AboutSection from "../Components/About/AboutSection"
function AboutPage() {
    return (
        <>
     <div>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          About Our College
        </h1>

        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          We are committed to excellence in education, innovation, and student success.
        </p>

      </section>

      {/* Main About Section */}
      {/* <AboutSection /> */}
      <AboutSection/>

      {/* PREMIUM CORE VALUES SECTION */}
<section className="py-32 bg-white relative overflow-hidden">

  {/* Background Shapes */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-24">

      <span className="inline-block bg-orange-100 text-orange-500 px-6 py-3 rounded-full text-sm font-bold tracking-[3px] uppercase">
        Our Core Values
      </span>

      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 mt-8 leading-tight">

        Shaping Future Leaders
        <span className="block text-orange-500 mt-2">
          With Purpose & Excellence
        </span>

      </h2>

      <p className="text-gray-600 text-lg leading-9 mt-8">
        At Al-Barkat School System, our values define the way we teach,
        inspire, and guide students toward academic excellence,
        confidence, discipline, and innovation.
      </p>

    </div>


    {/* Cards */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">

      {/* Card 1 */}
      <div className="group relative bg-gradient-to-br from-blue-800 to-blue-900 p-[1px] rounded-[35px] hover:-translate-y-3 transition duration-500 shadow-2xl">

        <div className="bg-white rounded-[35px] p-10 h-full">

          <div className="w-24 h-24 rounded-3xl bg-blue-50 flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition duration-500">
            🎓
          </div>

          <h3 className="text-3xl font-bold text-blue-800 mt-8">
            Academic Excellence
          </h3>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            We strive for the highest standards in education
            and outstanding academic achievement.
          </p>

        </div>

      </div>


      {/* Card 2 */}
      <div className="group relative bg-gradient-to-br from-orange-400 to-orange-500 p-[1px] rounded-[35px] hover:-translate-y-3 transition duration-500 shadow-2xl">

        <div className="bg-white rounded-[35px] p-10 h-full">

          <div className="w-24 h-24 rounded-3xl bg-orange-50 flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition duration-500">
            ⭐
          </div>

          <h3 className="text-3xl font-bold text-blue-800 mt-8">
            Character Building
          </h3>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Developing discipline, honesty, confidence,
            and strong moral values in every student.
          </p>

        </div>

      </div>


      {/* Card 3 */}
      <div className="group relative bg-gradient-to-br from-blue-800 to-blue-900 p-[1px] rounded-[35px] hover:-translate-y-3 transition duration-500 shadow-2xl">

        <div className="bg-white rounded-[35px] p-10 h-full">

          <div className="w-24 h-24 rounded-3xl bg-blue-50 flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition duration-500">
            🤝
          </div>

          <h3 className="text-3xl font-bold text-blue-800 mt-8">
            Community Focus
          </h3>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Building a supportive, inclusive,
            and positive learning environment for all.
          </p>

        </div>

      </div>


      {/* Card 4 */}
      <div className="group relative bg-gradient-to-br from-orange-400 to-orange-500 p-[1px] rounded-[35px] hover:-translate-y-3 transition duration-500 shadow-2xl">

        <div className="bg-white rounded-[35px] p-10 h-full">

          <div className="w-24 h-24 rounded-3xl bg-orange-50 flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition duration-500">
            💡
          </div>

          <h3 className="text-3xl font-bold text-blue-800 mt-8">
            Innovation
          </h3>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Embracing modern teaching methods
            and technology-driven education.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* OUR JOURNEY SECTION */}
<section className="py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">

  {/* Background Blur Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-24">

      <span className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold tracking-[3px] uppercase">
        Our Journey
      </span>

      <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 mt-8 leading-tight">

        Growing Through
        <span className="block text-orange-500 mt-2">
          Excellence & Innovation
        </span>

      </h2>

      <p className="text-gray-600 text-lg leading-9 mt-8">
        Key milestones in the journey of Al-Barkat School System
        toward academic excellence, innovation, and student success.
      </p>

    </div>


    {/* Timeline */}
    <div className="relative">

      {/* Center Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-800 via-orange-400 to-blue-800 -translate-x-1/2 rounded-full"></div>


      {/* ITEM 1 */}
      <div className="relative grid lg:grid-cols-2 gap-10 items-center mb-20">

        <div className="lg:text-right">

          <div className="inline-block bg-white shadow-2xl rounded-[32px] p-10 border border-gray-100">

            <span className="text-5xl font-extrabold text-orange-500">
              2010
            </span>

            <h3 className="text-3xl font-bold text-blue-800 mt-4">
              School Founded
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Al-Barkat School System was established with a vision
              to provide quality education and strong moral values.
            </p>

          </div>

        </div>

        {/* Timeline Dot */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-8 border-white shadow-xl"></div>

      </div>


      {/* ITEM 2 */}
      <div className="relative grid lg:grid-cols-2 gap-10 items-center mb-20">

        <div></div>

        <div>

          <div className="inline-block bg-white shadow-2xl rounded-[32px] p-10 border border-gray-100">

            <span className="text-5xl font-extrabold text-blue-800">
              2015
            </span>

            <h3 className="text-3xl font-bold text-orange-500 mt-4">
              First Branch Campus
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Expanded our educational mission by opening
              the second campus to serve more communities.
            </p>

          </div>

        </div>

        {/* Timeline Dot */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-800 rounded-full border-8 border-white shadow-xl"></div>

      </div>


      {/* ITEM 3 */}
      <div className="relative grid lg:grid-cols-2 gap-10 items-center mb-20">

        <div className="lg:text-right">

          <div className="inline-block bg-white shadow-2xl rounded-[32px] p-10 border border-gray-100">

            <span className="text-5xl font-extrabold text-orange-500">
              2018
            </span>

            <h3 className="text-3xl font-bold text-blue-800 mt-4">
              Digital Transformation
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Introduced modern school management systems
              and digital learning technologies.
            </p>

          </div>

        </div>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-8 border-white shadow-xl"></div>

      </div>


      {/* ITEM 4 */}
      <div className="relative grid lg:grid-cols-2 gap-10 items-center mb-20">

        <div></div>

        <div>

          <div className="inline-block bg-white shadow-2xl rounded-[32px] p-10 border border-gray-100">

            <span className="text-5xl font-extrabold text-blue-800">
              2020
            </span>

            <h3 className="text-3xl font-bold text-orange-500 mt-4">
              Award Recognition
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Received the “Best School Award” for excellence
              in education and student development.
            </p>

          </div>

        </div>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-800 rounded-full border-8 border-white shadow-xl"></div>

      </div>


      {/* ITEM 5 */}
      <div className="relative grid lg:grid-cols-2 gap-10 items-center mb-20">

        <div className="lg:text-right">

          <div className="inline-block bg-white shadow-2xl rounded-[32px] p-10 border border-gray-100">

            <span className="text-5xl font-extrabold text-orange-500">
              2023
            </span>

            <h3 className="text-3xl font-bold text-blue-800 mt-4">
              Third Campus
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Opened our third campus to accommodate
              the growing number of students.
            </p>

          </div>

        </div>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full border-8 border-white shadow-xl"></div>

      </div>


      {/* ITEM 6 */}
      <div className="relative grid lg:grid-cols-2 gap-10 items-center">

        <div></div>

        <div>

          <div className="inline-block bg-white shadow-2xl rounded-[32px] p-10 border border-gray-100">

            <span className="text-5xl font-extrabold text-blue-800">
              2024
            </span>

            <h3 className="text-3xl font-bold text-orange-500 mt-4">
              Modern Facilities
            </h3>

            <p className="text-gray-600 mt-5 leading-8">
              Completed major infrastructure upgrades with
              modern classrooms and advanced facilities.
            </p>

          </div>

        </div>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-800 rounded-full border-8 border-white shadow-xl"></div>

      </div>

    </div>

  </div>

</section>
    </div>
        </>
    )
}

export default AboutPage
