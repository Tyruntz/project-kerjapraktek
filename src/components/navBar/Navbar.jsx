import React, { useEffect } from "react";
import { IoCart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import { sectionIds } from "./sectionids.jsx";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isSearch, setIsSearch] = useState(false);

   // state untuk melacak page yang sedang aktif dan scroll state
   const [activeLink, setActiveLink] = useState("home");
   const [isScrolled, setIsScrolled] = useState(false);

   // fungsi untuk menghaluskan scroll ke section berdasarkan id
   const scrollToSection = (sectionId) => {
      setIsOpen(false);
      const element = document.getElementById(sectionId);
      if (element) {
         const marginTop = 0;
         const scrollToY =
            element.getBoundingClientRect().top + window.scrollY - marginTop;
         window.scrollTo({ top: scrollToY, behavior: "smooth" });
      }
   };

   // fungsi untuk menentukan section yang aktif ketika melakukan scroll
   const determineActiveSection = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
         const section = document.getElementById(sectionIds[i]);
         if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
               setActiveLink(sectionIds[i]);
               break;
            }
         }
      }
   };

   useEffect(() => {
      const scrollHandler = () => {
         if (window.scrollY > 300) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
         determineActiveSection();
      };
      window.addEventListener("scroll", scrollHandler);
      return () => {
         window.removeEventListener("scroll", scrollHandler);
      };
   }, []);

   return (
      <div className="bg-[#000000] bg-opacity-70 fixed top-0 w-full">
         <div className="flex flex-col justify-center sm:flex-row ">
            <div className="flex items-center justify-between">
               <div className="pl-2 flex items-center gap-2 uppercase hover:font-bold">
                  <img
                     className="w-10 h-10 object-cover rounded-full"
                     src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z"
                     alt=""
                  />
                  <span className="text-xl text-white">Jima</span>
               </div>
               <div>
                  <button
                     className="p-2 block sm:hidden"
                     onClick={() => {
                        setIsOpen(!isOpen);
                     }}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-2 text-white"
                     >
                        <path
                           className={isOpen ? "hidden" : "block"}
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                        <path
                           className={isOpen ? "block" : "hidden"}
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18 18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               </div>
            </div>
            <div
               className={`${
                  isOpen ? "block" : "hidden"
               } text-end justify-between w-full sm:flex`}
            >
               <div className="p-3 mr-2 flex gap-3 w-full justify-center flex-col sm:flex-row">
                  <ul className="flex justify-center flex-col sm:flex-row">
                     {sectionIds.map((sectionId, i) => {
                        return (
                           <li
                              key={i}
                              onClick={() => {
                                 scrollToSection(sectionId);
                              }}
                              className="p-2 text-white hover:text-blue-400 uppercase"
                           >
                              {sectionId === "/menu" ? (
                                 <a href="/menu">Menu</a>
                              ) : (
                                 <label
                                    className={
                                       activeLink === sectionId
                                          ? "text-[#ff9100] underline"
                                          : ""
                                    }
                                 >
                                    {sectionId}
                                 </label>
                              )}
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
