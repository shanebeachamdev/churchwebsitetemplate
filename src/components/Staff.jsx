import useInView from "../hooks/useInView";

export default function Staff({ staff }) {
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      id="staff"
      ref={sectionRef}
      className={`py-20 px-6 bg-gray-50 transition-all duration-700 ease-out
        ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="max-w-5xl mx-auto">

        <h3 className="text-3xl font-bold text-center mb-12">
          Meet Our Team
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {staff.map((p, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden shadow-sm
                transition-all duration-700 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h[screen] object-cover object-top"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  {p.name}
                </h4>

                <p className="text-gray-500 mb-2">
                  {p.role}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {p.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}