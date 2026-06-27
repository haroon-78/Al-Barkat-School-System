import Secondary from "../../src/assets/images/Campuses/Secondaycampus.jpeg";
import Secondary1 from "../../src/assets/images/SecondaryCampus/secondary1.jpeg";
import Secondary2 from "../../src/assets/images/SecondaryCampus/secondary2.jpeg";
import Secondary3 from "../../src/assets/images/SecondaryCampus/secondary3.jpeg";
import Secondary4 from "../../src/assets/images/SecondaryCampus/secondary4.jpeg";

function SecondaryCampus() {

  return (

    <section className="min-h-screen bg-gray-50 py-20 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
            Al-Barkat School System
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mt-6">

            📚 Secondary
            <span className="text-orange-500">
              {" "}Campus
            </span>

          </h1>

          <span className="block w-28 h-1 bg-orange-500 mx-auto mt-4 rounded"></span>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">

            Secondary Campus focuses on strong academic foundations,
            discipline, confidence building, and board exam preparation
            with highly qualified teachers and modern facilities.

          </p>

        </div>



        {/* Hero Image */}
        <div className="relative mb-20">

          <img
            src={Secondary}
            alt="Secondary Campus"
            className="w-full h-[600px] object-cover rounded-[40px] shadow-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-[40px]"></div>


          {/* Floating Card */}
          <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md">

            <h2 className="text-3xl font-bold text-blue-900">
              Future Leaders Start Here
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Advanced classrooms, science labs,
              disciplined learning, and board preparation
              programs for student success.
            </p>

          </div>

        </div>



        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-orange-500">
              Matric
            </h3>

            <p className="text-gray-600 mt-3">
              Board Classes
            </p>

          </div>



          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-blue-900">
              Science Labs
            </h3>

            <p className="text-gray-600 mt-3">
              Practical Learning
            </p>

          </div>



          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-orange-500">
              Discipline
            </h3>

            <p className="text-gray-600 mt-3">
              Character Building
            </p>

          </div>



          <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-3 hover:shadow-2xl transition duration-500">

            <h3 className="text-4xl font-bold text-blue-900">
              Smart Classes
            </h3>

            <p className="text-gray-600 mt-3">
              Modern Education
            </p>

          </div>

        </div>



        {/* Gallery Section */}
        <div>

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-blue-900">

              Secondary Campus
              <span className="text-orange-500">
                {" "}Gallery
              </span>

            </h2>

            <span className="block w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></span>

          </div>



          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Image 1 */}
            <div className="group overflow-hidden rounded-3xl shadow-xl">

              <img
                src={Secondary1}
                alt="Secondary Campus"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

            </div>



            {/* Image 2 */}
            <div className="group overflow-hidden rounded-3xl shadow-xl">

              <img
                src={Secondary2}
                alt="Students"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

            </div>



            {/* Image 3 */}
            <div className="group overflow-hidden rounded-3xl shadow-xl">

              <img
                src={Secondary3}
                alt="Classroom"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

            </div>



            {/* Image 4 */}
            <div className="group overflow-hidden rounded-3xl shadow-xl">

              <img
                src={Secondary4}
                alt="Activities"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default SecondaryCampus