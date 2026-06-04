export default function Footer() {
  return (
    <footer className="py-10 text-center text-gray-600 bg-white border-t border-gray-200">
      <p className="mb-2">
        © {new Date().getFullYear()} Hope City Church. All rights reserved.
      </p>

      <p className="text-sm text-gray-400">
        Built with care for our community
      </p>
    </footer>
  );
}