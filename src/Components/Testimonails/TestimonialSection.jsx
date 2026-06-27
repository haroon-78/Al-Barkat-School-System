import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

function Testimonials() {

    const testimonials = [
        {
            name: "Ahmed Raza",
            role: "Parent",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            review:
                "Al-Barkat School System has provided an excellent learning environment for my child. The teachers are highly professional and caring."
        },

        {
            name: "Ayesha Khan",
            role: "Student",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            review:
                "The modern classrooms, labs, and supportive teachers helped me improve both academically and personally."
        },

        {
            name: "Muhammad Ali",
            role: "Parent",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            review:
                "I truly appreciate the discipline, moral education, and strong academic system offered by Al-Barkat School."
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);

    }, [testimonials.length]);

    return (
        <section className="py-28 bg-gray-50 relative overflow-hidden">

            {/* Background Blur */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <div className="text-center mb-16">

                    <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold">
                        Testimonials
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-6">
                        What Our <span className="text-orange-500">Students & Parents Say</span>
                    </h2>

                    <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
                        Hear the experiences of students and parents who trust Al-Barkat School System for quality education.
                    </p>

                </div>

                {/* Animated Card */}
                <div className="relative h-[420px] flex items-center justify-center">

                    {testimonials.map((item, index) => (

                        <div
                            key={index}
                            className={`absolute transition-all duration-700 ease-in-out w-full md:w-[750px]

                            ${index === current
                                    ? "opacity-100 scale-100 translate-x-0 z-20"
                                    : index < current
                                        ? "opacity-0 -translate-x-20 scale-95"
                                        : "opacity-0 translate-x-20 scale-95"
                                }
                        `}
                        >

                            {/* CARD */}
                            <div className="bg-blue-900 text-white rounded-[40px] shadow-2xl p-10 md:p-14 border border-blue-800 relative overflow-hidden">

                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-white/10 text-7xl">
                                    <FaQuoteLeft />
                                </div>

                                {/* Stars */}
                                <div className="flex justify-center text-orange-400 gap-1 mb-6 text-xl">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>

                                {/* Review */}
                                <p className="text-white/90 text-lg leading-8 text-center max-w-3xl mx-auto relative z-10">
                                    "{item.review}"
                                </p>

                                {/* User */}
                                <div className="flex flex-col items-center mt-10">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-orange-400 shadow-lg"
                                    />

                                    <h3 className="text-2xl font-bold text-orange-400 mt-4">
                                        {item.name}
                                    </h3>

                                    <p className="text-white/70 mt-1">
                                        {item.role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-10">

                    {testimonials.map((_, index) => (

                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-4 h-4 rounded-full transition-all

                            ${current === index
                                    ? "bg-orange-500 w-10"
                                    : "bg-gray-300"
                                }
                        `}
                        ></button>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;