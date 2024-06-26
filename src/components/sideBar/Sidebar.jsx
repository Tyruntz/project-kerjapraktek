import React from "react";
import { useState, useEffect } from "react";
import { pageids } from "./pageids";

const Sidebar = ({ activeComponent, onItemClick }) => {
   return (
      <div className="bg-[#d1d1d3] p-2 gap-2 grid grid-rows-4 h-screen w-1/2 lg:w-1/5  ">
         <header className="w-full rounded-md grid place-content-center border border-[#d1d1d3] bg-[#191919]">
            <div className="flex flex-col justify-center items-center">
               <img
                  className="h-[80px] w-[80px] object-cover rounded-full"
                  src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/logo-jima.png?t=2024-06-22T15%3A24%3A04.578Z"
                  alt=""
               />
               <h1 className="text-white">Jima Coffee</h1>
            </div>
         </header>
         <main className="row-span-3 border text-white border-[#d1d1d3] bg-[#191919] rounded-md">
            <nav className=" h-full">
               <ul className="h-full grid justify-items-start items-center grid-rows-5">
                  {pageids.map((pageid, index) => (
                     <li
                        onClick={() => onItemClick(pageid.pageName)}
                        key={index}
                        className={`p-2 h-full flex gap-3 justify-start items-center cursor-pointer w-full ${
                           activeComponent === pageid.pageName
                              ? "bg-[#fefefe] text-black"
                              : "hover:bg-gray-200 hover:text-black"
                        }`}
                     >
                        <span>{pageid.icon}</span>
                        {pageid.pageName}
                     </li>
                  ))}
               </ul>
            </nav>
         </main>
         <footer className="bg-[#191919] border grid place-content-center border-[#d1d1d3] min-h-20  rounded-md">
            <p className="text-center text-white">Project Kerja Praktek</p>
         </footer>
      </div>
   );
};

export default Sidebar;
