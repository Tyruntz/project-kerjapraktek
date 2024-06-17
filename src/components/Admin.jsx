import React from "react";
import { useState } from "react";
import Sidebar from "./sideBar/Sidebar";
import Dashboard from "./adminPage/Dashboard";
import Transaction from "./adminPage/Transaction";
import Menu from "./adminPage/Menu";
import Report from "./adminPage/Report";


import Datetime from "./Datetime";

const Admin = () => {
   const [activeComponent, setActiveComponent] = useState("Dashboard");
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
   const handleItemClick = (componentName) => {
      setActiveComponent(componentName);

   };

   const handleLogout = async () => {
      try {
        const response = await fetch('/api/logout.json', {
          method: 'POST',
        });
  
        if (response.ok) {
          // Handle successful logout, misalnya redirect ke halaman login
          window.location.href = '/login';
        } else {
          // Handle logout error
          console.error('Logout failed:', response.statusText);
        }
      } catch (error) {
        console.error('Logout error:', error);
      }
    };
    
   return (
      <div className="flex">
         <Sidebar
            activeComponent={activeComponent}
            onItemClick={handleItemClick}
         />

         <div className="bg-[#d1d1d3] grid grid-rows-7 gap-2 w-full h-screen p-2">
            <header className="w-full grid grid-cols-5 px-3 rounded-md border border-[#d1d1d3] bg-[#fefefe]">
               <div className="flex gap-3 col-span-3 items-center  p-2">
                  <h1>Welcome</h1>
               </div>
               <div className="flex items-center ">

               <Datetime />
               </div>
               
               <div className="flex gap-2 justify-center items-center">
               <h1>Admin</h1>
                <button onClick={()=>{
                  handleLogout();
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                </button>

               </div>
            </header>

            {activeComponent === "Dashboard" && <Dashboard />}
            {activeComponent === "Transaction" && <Transaction />}
            {activeComponent === "Menu" && <Menu />}
            {activeComponent === "Report" && <Report />}
         </div>
      </div>
   );
};

export default Admin;
