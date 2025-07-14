import React from "react";
import { Github, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-7">
      <div className=" px-5">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We are committed to providing top-quality roofing solutions with
              over 15 years of industry experience. Your satisfaction and safety
              are our top priorities.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="flex flex-col gap-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone size={20} /> +91-8275957698
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} /> ravikantatare2001@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={20} /> Bhaldalkar Nagar, Shewalewadi, Pune
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Follow Project</h3>
            <a
              href="https://github.com/ravikanttarare95/ravi-ro-tailwind.git"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer" ////////////////
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 pt-7 border-t border-blue-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
