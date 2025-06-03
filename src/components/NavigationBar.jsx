import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Ultra Profile
        </Link>
        <ul className="flex space-x-6 uppercase text-sm font-bold text-gray-800">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
          </li>
          
          <li>
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
