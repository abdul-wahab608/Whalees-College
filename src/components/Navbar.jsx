import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu, IconX } from "./common/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 flex flex-wrap gap-2 justify-between items-center">
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
        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>

        <ul className="hidden md:flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
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
      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-blue-900/95 backdrop-blur-sm">
          <ul className="px-4 py-4 space-y-3 text-sm">
            {[
              ["Home","/"],["About","/about"],["Admission","/admission"],["Academics","/academics"],["Life at Whales","/life-at-whales"],["CCSP","/ccsp"],["Gallery","/gallery"],["Downloads","/downloads"],["Alumni","/alumni"],["Interviews","/interviews"],["Contact","/contact"],["Login","/login"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-md px-3 py-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
