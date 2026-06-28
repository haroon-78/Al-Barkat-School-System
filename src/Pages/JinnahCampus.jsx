import Jinnah from "../assets/images/Campuses/Jinnahcampus.jpeg";
import Jinnah1 from "../assets/images/JinnahCampus/Jinnah1.jpeg";
import Jinnah2 from "../assets/images/JinnahCampus/Jinnah2.jpeg";
import Jinnah3 from "../assets/images/JinnahCampus/Jinnah3.jpeg";
import Jinnah4 from "../assets/images/JinnahCampus/Jinnah4.jpeg";

function JinnahCampus() {

  return (

    <section className="min-h-screen bg-gray-50 py-20 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
            Al-Barkat School System
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mt-6">

            📚 Jinnah
            <span className="text-orange-500">
              {" "}Campus
            </span>

          </h1>

          <span className="block w-28 h-1 bg-orange-500 mx-auto mt-4 rounded"></span>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">

            Jinnah Campus provides a modern learning environment focused on creativity,
            discipline, innovation, and student-centered education with advanced academic facilities.

          </p>

        </div>



        {/* Hero Image */}
        <div className="relative mb-20">

          <img
            src={Jinnah}
            alt="Jinnah Campus"
            className="w-full h-[600px] object-cover rounded-[40px] shadow-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-[40px]"></div>


          {/* Floating Card */}
          <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md">

            <h2 className="text-3xl font-bold text-blue-900">
              Future Starts Here
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Smart classrooms, creative labs, and modern learning environment
              designed for student success.
            </p>

          </div>

        </div>



        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-orange-500">
              700+
            </h3>

            <p className="text-gray-600 mt-3">
              Students
            </p>

          </div>



          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-blue-900">
              Smart Classes
            </h3>

            <p className="text-gray-600 mt-3">
              Modern Learning
            </p>

          </div>



          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-orange-500">
              Creative Labs
            </h3>

            <p className="text-gray-600 mt-3">
              Practical Education
            </p>

          </div>



          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-blue-900">
              Discipline
            </h3>

            <p className="text-gray-600 mt-3">
              Character Building
            </p>

          </div>

        </div>



        {/* Gallery Section */}
        <div>

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-blue-900">

              Jinnah Campus
              <span className="text-orange-500">
                {" "}Gallery
              </span>

            </h2>

            <span className="block w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></span>

          </div>



          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="group overflow-hidden rounded-3xl shadow-xl">
              <img 
              src={Jinnah1} 
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
            </div>

            <div className="group overflow-hidden rounded-3xl shadow-xl">
              <img 
              src={Jinnah2}
               className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
            </div>

            <div className="group overflow-hidden rounded-3xl shadow-xl">
              <img 
              src={Jinnah3} 
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
            </div>

            <div className="group overflow-hidden rounded-3xl shadow-xl">
              <img 
              src={Jinnah4} 
              className="w-full h-80 object-cover group-hover:scale-110 transition duration-700" />
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default JinnahCampus;