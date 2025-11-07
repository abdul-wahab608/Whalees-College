import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center -ml-3 py-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/10 rounded-lg filter blur-sm transition-all duration-200 group-hover:bg-white/20"></div>
            <img 
              src="/assets/images/whaleslogo.png" 
              alt="Whales College" 
              className="h-14 w-auto relative rounded transform hover:scale-102 transition-all duration-200" 
            />
          </div>
        </Link>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/admission">Admission</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/life-at-whales">Life at Whales</Link></li>
          <li><Link to="/ccsp">CCSP</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/downloads">Downloads</Link></li>
          <li><Link to="/alumni">Alumni</Link></li>
          <li><Link to="/interviews">Interviews</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
