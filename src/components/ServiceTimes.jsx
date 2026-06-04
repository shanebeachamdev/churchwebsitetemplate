import useInView from "../hooks/useInView";

export default function ServiceTimes({ events }) {
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-20 bg-white px-6 transition-all duration-700 ease-out
        ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-5xl mx-auto">

        <h3 className="text-3xl font-bold text-center mb-12">
          Service Times & Gatherings
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div
              key={i}
              className={`bg-gray-50 border border-gray-200 rounded-xl p-6 text-center
                transition-all duration-700 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                {e.title}
              </h4>

              <p className="text-gray-600">
                {e.time}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}