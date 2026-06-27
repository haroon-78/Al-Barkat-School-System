import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from '../../assets/Logo.png'
function FooterSection() {
  return (
    <>
      <footer className="bg-blue-900 text-white pt-16 pb-8">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* About */}
            <div>
         <div className="flex items-center gap-2 pb-2">
  <img
    src={Logo}
    alt="School Logo"
    className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
  />

  <h2 className="text-2xl font-bold leading-none">
    Al <span className="text-orange-500">Barkat</span>
  </h2>
</div>
              <p className="text-gray-300">
                Providing quality education and building a bright future for students.
              </p>
            </div>


            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-orange-500 cursor-pointer">Home</li>
                <li className="hover:text-orange-500 cursor-pointer">About</li>
                <li className="hover:text-orange-500 cursor-pointer">Departments</li>
                <li className="hover:text-orange-500 cursor-pointer">Contact</li>
              </ul>
            </div>


            {/* Departments */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Departments</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Computer Science</li>
                <li>Business</li>
                <li>Mathematics</li>
                <li>Science</li>
              </ul>
            </div>


            {/* Social */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

              <div className="flex gap-4">

                <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                  <FaFacebookF />
                </a>

                <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                  <FaTwitter />
                </a>

                <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                  <FaInstagram />
                </a>

                <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>


          {/* Bottom Line */}
          <div className="border-t border-gray-500 mt-10 pt-6 text-center text-gray-400">

            <p>
              © {new Date().getFullYear()} Al Barkat College. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </>
  )
}

export default FooterSection
