import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <>
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">

            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Contact <span className="text-orange-500">Us</span>
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto mt-2 rounded"></div>

            <p className="text-gray-600 mt-4">
              Get in touch with us for admissions and queries
            </p>

          </div>


          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT → Form */}
            <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded hover:bg-orange-500 transition"
              >
                Send Message
              </button>

            </form>


            {/* RIGHT → Info */}
            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900">Address</h4>
                  <p className="text-gray-600">Al Barkat College, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-orange-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900">Phone</h4>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 text-2xl mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900">Email</h4>
                  <p className="text-gray-600">info@albarkat.com</p>
                </div>
              </div>

              {/* Optional Map */}
              <div className="mt-6">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?q=lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-64 rounded-lg border-0"
                ></iframe>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default ContactSection
