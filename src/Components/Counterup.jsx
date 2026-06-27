import { useEffect, useRef, useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaFlask } from "react-icons/fa";

export default function CounterSection() {

    const sectionRef = useRef(null);

    const [counts, setCounts] = useState({
        students: 0,
        teachers: 0,
        campuses: 0,
        labs: 0,
    });

    const animateCounter = () => {

        let start = 0;

        const targets = {
            students: 1500,
            teachers: 90,
            campuses: 3,
            labs: 10,
        };

        const duration = 2000;
        const intervalTime = 20;
        const steps = duration / intervalTime;

        const interval = setInterval(() => {
            start++;

            setCounts({
                students: Math.min(Math.floor((targets.students / steps) * start), targets.students),
                teachers: Math.min(Math.floor((targets.teachers / steps) * start), targets.teachers),
                campuses: Math.min(Math.floor((targets.campuses / steps) * start), targets.campuses),
                labs: Math.min(Math.floor((targets.labs / steps) * start), targets.labs),
            });

            if (start >= steps) clearInterval(interval);

        }, intervalTime);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounter();
                }
            },
            { threshold: 0.35 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const Card = ({ icon, value, label }) => (
        <div className="relative group bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl text-center overflow-hidden transition">

            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="text-4xl text-orange-400 mb-4 flex justify-center">
                {icon}
            </div>

            <h2 className="text-5xl font-extrabold text-white">
                {value}
            </h2>

            <p className="text-white/80 mt-3 text-lg">
                {label}
            </p>

        </div>
    );

    return (
        <>

            {/* 🔥 HEADING SECTION UPDATED */}
            <div className="text-center py-14 bg-gray-50">

                {/* SMALL BADGE */}
                <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
                    OUR STATISTICS
                </span>

                {/* MAIN HEADING */}
                <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mt-5">
                    Our <span className="text-orange-500">Academic Excellence</span> in Numbers
                </h2>

                {/* UNDERLINE */}
                <div className="flex justify-center mt-4">
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                </div>

                <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
                    A trusted educational system focused on student success, innovation, and strong academic foundation
                </p>
            </div>


            {/* 🔵 COUNTER SECTION */}
            <section
                ref={sectionRef}
                className="py-28 bg-blue-900 text-white relative overflow-hidden"
            >

                <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <Card icon={<FaUserGraduate />} value={`${counts.students}+`} label="Students" />
                        <Card icon={<FaChalkboardTeacher />} value={`${counts.teachers}+`} label="Qualified Teachers" />
                        <Card icon={<FaSchool />} value={counts.campuses} label="Campuses" />
                        <Card icon={<FaFlask />} value={counts.labs} label="Science & Computer Labs" />

                    </div>

                </div>

            </section>

        </>
    );
}