import useInView from "../hooks/useInView";

export default function Visit() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="visit"
      ref={ref}
      className={`py-20 bg-gray-900 text-white text-center px-6
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-3xl mx-auto">

        <h3 className="text-3xl font-bold mb-4">
          Plan Your Visit
        </h3>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          We’d love to welcome you this Sunday. Whether you’ve been in church
          your whole life or are just exploring faith, there’s a place for you
          here at Hope City Church.
        </p>

        <div className="space-y-3 text-gray-300 mb-10">
          <p>📍 123 Main Street • Your City, State</p>
          <p>🕚 Sundays at 11:00 AM</p>
          <p>☕ Free coffee & fellowship before service</p>
          <p>👶 Children’s ministry available</p>
          <p>👕 Casual dress welcome</p>
        </div>

        <a
          href="mailto:info@hopecitychurch.com"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>

      </div>
    </section>
  );
}