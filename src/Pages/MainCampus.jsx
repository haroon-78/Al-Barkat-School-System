import Main from "../../src/assets/images/Campuses/maincampus.jpeg";
import Main1 from "../../src/assets/images/MainCampus/main1.jpeg";
import Main2 from "../../src/assets/images/MainCampus/main2.jpeg";
import Main3 from "../../src/assets/images/MainCampus/main3.jpeg";

function MainCampus() {

  return (

    <section className="min-h-screen bg-gray-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          {/* Left Content */}
          <div>

            <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
              Al-Barkat School System
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 leading-tight mt-6">

              🏫 Main
              <span className="text-orange-500">
                {" "}Campus
              </span>

            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-6">

              The Main Campus serves as the central hub of
              academic excellence where students receive
              quality education in a disciplined, creative,
              and inspiring environment.

            </p>


            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="text-3xl font-bold text-orange-500">
                  1000+
                </h3>

                <p className="text-gray-600 mt-2">
                  Students
                </p>

              </div>


              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="text-3xl font-bold text-blue-900">
                  50+
                </h3>

                <p className="text-gray-600 mt-2">
                  Qualified Teachers
                </p>

              </div>


              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="text-3xl font-bold text-orange-500">
                  Science Labs
                </h3>

                <p className="text-gray-600 mt-2">
                  Practical Learning
                </p>

              </div>


              <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">

                <h3 className="text-3xl font-bold text-blue-900">
                  Since 1999
                </h3>

                <p className="text-gray-600 mt-2">
                  Excellence in Education
                </p>

              </div>

            </div>

          </div>



          {/* Main Image */}
          <div className="relative">

            <img
              src={Main}
              alt="Main Campus"
              className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
            />


            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-xl">

              <h3 className="text-2xl font-bold text-blue-900">
                Best Learning Environment
              </h3>

              <p className="text-gray-600 mt-1">
                Modern Classrooms & Activities
              </p>

            </div>

          </div>

        </div>



        {/* Gallery Section */}
        <div>

          {/* Heading */}
          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-blue-900">

              Campus
              <span className="text-orange-500">
                {" "}Gallery
              </span>

            </h2>

            <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded"></span>

            <p className="text-gray-600 mt-4">
              Explore our classrooms, activities, and campus environment.
            </p>

          </div>



          {/* Gallery Images */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Image 1 */}
            <div className="overflow-hidden rounded-3xl shadow-lg group">

              <img
                src={Main1}
                alt="Campus Building"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>



            {/* Image 2 */}
            <div className="overflow-hidden rounded-3xl shadow-lg group">

              <img
                src={Main2}
                alt="Students Learning"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>



            {/* Image 3 */}
            <div className="overflow-hidden rounded-3xl shadow-lg group">

              <img
                src={Main3}
                alt="School Activities"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default MainCampus