
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function TopBar() {
    return (
        <>
            <div className='bg-blue-900 text-white hidden md:block '>
                <div className='flex justify-between py-3 px-8' >
                    {/* // left Side */}
                    <div className='flex gap-6 '>
                        <p className='flex place-items-center gap-3 '><FaPhoneAlt className='text-2xl ' /> +92 333 3321188</p> |
                        <p className='flex place-items-center gap-3 '><MdOutlineEmail className='text-2xl' /> abssm130@gmail.com</p>
                    </div>
                    {/* // Right Side */}
                    <div className=' flex items-center gap-x-4'>
                        <h1 className='font-bold'>Follow Us</h1>
                        <FaFacebookF className='text-gray-400 hover:text-white'/>
                        <FaXTwitter className='text-gray-400 hover:text-white'/>
                        <FaLinkedin className='text-gray-400 hover:text-white'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar
