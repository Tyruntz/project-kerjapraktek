import React from "react";
import { useState, useEffect } from "react";
import { pageids } from "./pageids";

const Sidebar = ({ activeComponent, onItemClick }) => {
   return (
      <div className="bg-[#d1d1d3] p-2 gap-2 grid grid-rows-4 h-screen w-1/2 lg:w-1/5  ">
         <header className="w-full rounded-md grid place-content-center border border-[#d1d1d3] bg-[#fefefe]">
            <div className="flex flex-col justify-center items-center">
               <img
                  className="h-[80px] w-[80px] object-cover rounded-full"
                  src="src\assets\images\b42e38.png"
                  alt=""
               />
               <h1>Jima Coffee</h1>
            </div>
         </header>
         <main className="row-span-3 border border-[#d1d1d3] bg-[#fefefe] rounded-md">
            <nav className=" h-full">
               <ul className="h-full grid justify-items-start items-center grid-rows-5">
                  {pageids.map((pageid, index) => (
                     <li
                        onClick={() => onItemClick(pageid.pageName)}
                        key={index}
                        className={`p-2 h-full flex gap-3 justify-start items-center cursor-pointer w-full ${
                           activeComponent === pageid.pageName
                              ? "bg-[#e2e2e4]"
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
         <footer className="bg-[#fefefe] border border-[#d1d1d3] min-h-20  rounded-md">
            <p className="text-center">All rights reserved</p>
         </footer>
      </div>
   );
};

export default Sidebar;
