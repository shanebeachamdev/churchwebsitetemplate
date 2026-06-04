import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition hover:text-gray-500 ${
      active === id ? "text-black font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-xl font-bold text-gray-900">
          Hope City Church
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#sermons" className={linkClass("sermons")}>Sermons</a>
          <a href="#ministries" className={linkClass("ministries")}>Ministries</a>
          <a href="#staff" className={linkClass("staff")}>Staff</a>
          <a href="#services" className={linkClass("services")}>Service Times</a>
          <a href="#visit" className={linkClass("visit")}>Plan Your Visit</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium shadow-md">
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass("about")}>About</a>
          <a href="#sermons" onClick={() => setMenuOpen(false)} className={linkClass("sermons")}>Sermons</a>
          <a href="#ministries" onClick={() => setMenuOpen(false)} className={linkClass("ministries")}>Ministries</a>
          <a href="#staff" onClick={() => setMenuOpen(false)} className={linkClass("staff")}>Staff</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className={linkClass("services")}>Service Times</a>
          <a href="#visit" onClick={() => setMenuOpen(false)} className={linkClass("visit")}>Plan Your Visit</a>
        </div>
      )}
    </header>
  );
}