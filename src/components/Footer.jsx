import { Link, NavLink } from "react-router-dom";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import uietimage from "../assets/uietimage.jpg";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden mt-[55px] ">
      <div className="relative mx-auto max-w-screen-2xl px-4 py-6 lg:py-8">
        <img
          src={uietimage} 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 h-full w-full bg-black/60 px-8 py-6 flex flex-col justify-between rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Column 1 */}
            <div className="flex flex-col items-center md:items-start text-[#FEFBFB] text-center md:text-left">
              <img
                src="https://csjmu.ac.in//wp-content/themes/csjmutheme/imgs-copyrighted/csjmu-logo-main.png"
                alt="University Logo"
                className="w-20 mb-4"
              />
              <p className="font-semibold">
                Chhatrapati Shahu Ji Maharaj University, Kanpur
              </p>
              <p className="text-xs">(Formerly Kanpur University, Kanpur)</p>
              <p className="text-xs">Kalyanpur, Kanpur - 208024</p>
              <p className="text-xs mt-2">
                Contact: 0512-2246609, 0512-2246608
              </p>
              <p className="text-xs">
                Email: info@csjmu.ac.in / ssc@csjmu.ac.in
              </p>
              <div className="flex space-x-4 mt-4 text-lg">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaGraduationCap />
                <FaMapMarkerAlt />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-2">Terms & Policies</h3>
              {[
                "Logo Download",
                "Copyrights",
                "Hyperlinking Policy",
                "Terms & Conditions",
                "Privacy Policy",
                "Disclaimer",
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:underline text-[#FEFBFB] text-sm"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-2">Important Links</h3>
              {[
                "Raj Bhavan, Uttar Pradesh",
                "Higher Education, Uttar Pradesh",
                "UP Higher Ed Digital Library",
                "HRD Minister",
                "NCTE",
                "NSS Registration",
                "Common Fee Portal",
                "MGSL (NSS)",
                "Tenders",
                "Anti-Ragging Program",
                "Screen Reader",
              ].map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:underline text-sm text-[#FEFBFB]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-6 pt-3 border-t border-gray-400 text-xs text-center text-[#FEFBFB]">
            <p>
              Notice: Only <span className="font-medium">csjmu.ac.in</span> and{" "}
              <span className="font-medium">kanpuruniversity.org</span> are our
              official websites. All others are fake (
              <a href="#" className="text-blue-400 underline">
                Fake Website Alert
              </a>
              )
            </p>
            <p className="mt-1">
              Best viewed in 1280x720 resolution. If the website seems slow to
              load, please clear your browser cookies and refresh the page.
              <br />
              Created By Abhishek Gupta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
