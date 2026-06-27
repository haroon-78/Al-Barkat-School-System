function EventsGallery() {

  const sections = [
    {
      title: "Sports Activities",
      color: "orange",
      date: "March 2025",

      images: [
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      ],
    },

    {
      title: "Important Days",
      color: "blue",
      date: "August 2025",

      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      ],
    },

    {
      title: "Educational Trips",
      color: "orange",
      date: "December 2025",

      images: [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop",
      ],
    },

    {
      title: "PTM Meetings",
      color: "blue",
      date: "January 2025",

      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];


  return (
    <>
      <section className=" bg-gray-50 overflow-hidden pb-10">

{/* Hero Section */}
<section className="bg-blue-900 text-white py-17 text-center">

  <h1 className="text-4xl md:text-5xl font-bold">
    Our Events & Activities
  </h1>

  <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
    Discover exciting school events, educational activities, competitions,
    celebrations, and memorable moments that inspire creativity, teamwork,
    confidence, and student growth.
  </p>

</section>


        <div className="max-w-7xl pt-24 mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-24">

            <span className="bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
              EVENTS GALLERY
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mt-6 leading-tight">
              School Events &
              <span className="text-orange-500">
                {" "}Memories
              </span>
            </h2>

            <div className="w-28 h-1 bg-orange-500 mx-auto mt-5 rounded-full"></div>

            <p className="text-gray-600 mt-8 text-lg max-w-3xl mx-auto leading-8">
              Explore memorable moments from sports activities,
              educational trips, celebrations, and PTM meetings.
            </p>

          </div>


          {/* SECTIONS */}
          <div className="space-y-28">

            {sections.map((section, index) => (

              <div key={index}>

                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-5">

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-3 h-14 rounded-full ${
                        section.color === "orange"
                          ? "bg-orange-500"
                          : "bg-blue-800"
                      }`}
                    ></div>

                    <div>

                      <h3 className="text-3xl md:text-4xl font-bold text-blue-800">
                        {section.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Al-Barkat School System
                      </p>

                    </div>

                  </div>

                  {/* DATE */}
                  <div
                    className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md w-fit ${
                      section.color === "orange"
                        ? "bg-orange-100 text-orange-500"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    Event Date : {section.date}
                  </div>

                </div>


                {/* IMAGES GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                  {section.images.map((img, i) => (

                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-[30px] shadow-xl bg-white hover:-translate-y-3 transition duration-500"
                    >

                      {/* IMAGE */}
                      <div className="overflow-hidden">

                        <img
                          src={img}
                          alt={section.title}
                          className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
                        />

                      </div>

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                      {/* CONTENT */}
                      <div className="absolute bottom-6 left-6 text-white">

                        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                          Event Gallery
                        </span>

                        <h4 className="text-2xl font-bold mt-4">
                          {section.title}
                        </h4>

                        <p className="text-white/80 mt-2">
                          Captured Memories & Activities
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default EventsGallery;
