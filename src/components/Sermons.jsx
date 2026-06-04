import useInView from "../hooks/useInView";

export default function Sermons({ sermons }) {
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="sermons"
      className={`py-20 px-6 bg-white transition-all duration-700 ease-out
        ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-5xl mx-auto">

        <h3 className="text-3xl font-bold text-center mb-12">
          Recent Sermons
        </h3>

        {/* Featured Sermon */}
        <div
          className={`mb-10 bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-out
            ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <img
            src={sermons[0].image}
            className="w-full h-72 object-cover opacity-80"
            alt={sermons[0].title}
          />

          <div className="p-8">
            <p className="text-sm uppercase text-gray-300 mb-2">
              Latest Message
            </p>

            <h4 className="text-3xl font-bold mb-2">
              {sermons[0].title}
            </h4>

            <p className="text-gray-300 mb-4">
              {sermons[0].date}
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition">
              Watch Sermon
            </button>
          </div>
        </div>

        {/* Sermon List */}
        <div className="space-y-4">
          {sermons.slice(1).map((s, i) => (
            <div
              key={i}
              className={`flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-700 ease-out cursor-pointer hover:bg-gray-100 hover:shadow-md
                ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-28 h-20 object-cover rounded-lg"
              />

              <div>
                <p className="font-semibold text-lg text-gray-900">
                  {s.title}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {s.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}