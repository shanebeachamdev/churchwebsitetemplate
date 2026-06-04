import useInView from "../hooks/useInView";

export default function Ministries({ ministries }) {
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      id="ministries"
      ref={sectionRef}
      className={`py-20 px-6 bg-white transition-all duration-700 ease-out
        ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-5xl mx-auto">

        <h3 className="text-3xl font-bold text-center mb-12">
          Ministries
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {ministries.map((m, i) => (
            <div
              key={i}
              className={`bg-gray-50 border border-gray-200 rounded-xl p-6
                transition-all duration-700 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h4 className="font-semibold text-xl mb-3 text-gray-900">
                {m.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}