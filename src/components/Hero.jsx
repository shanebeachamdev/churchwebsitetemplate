import useInView from "../hooks/useInView";

export default function Hero({ churchImg }) {
  const [textRef, textVisible] = useInView({ threshold: 0.2 });
  const [imgRef, imgVisible] = useInView({ threshold: 0.2 });

  return (
    <>
      {/* Hero Image */}
      <section
        id="about"
        ref={imgRef}
        className={`transition-all duration-700 ease-out
          ${imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <img
          src={churchImg}
          alt="Church service"
          className="w-full h-[450px] object-cover"
        />
      </section>

      {/* Hero Text */}
      <section
        ref={textRef}
        className={`text-center py-16 bg-gray-900 text-white transition-all duration-700 ease-out
          ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h2 className="text-5xl font-bold mb-4 text-white">
          Welcome Home
        </h2>

        <p className="text-xl mb-6 max-w-2xl mx-auto">
          A Christ-centered church helping people know God, grow in faith, and live with purpose.
        </p>

        <a
          href="#visit"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Plan Your Visit
        </a>
      </section>
    </>
  );
}