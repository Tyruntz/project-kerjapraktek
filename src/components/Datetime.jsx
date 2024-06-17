import React from "react";
import { useState, useEffect } from "react";

const Datetime = () => {
   const [date, setDate] = useState(new Date());

   useEffect(() => {
      const timer = setInterval(() => setDate(new Date()), 1000);

      return function cleanup() {
         clearInterval(timer);
      };
   });
   return (
      <div className="flex items-center justify-end">
         <div className="grid grid-flow-rows text-left gap-1  bg-white p-2 py-1 text-sm">
            <div className="flex gap-2">
               <h3>
                  Hari {date.toLocaleDateString("id-ID", { weekday: "long" })},
               </h3>
               <h2>Bulan {date.toLocaleDateString()}</h2>
            </div>
            <h1>
               Jam{" "}
               {date.toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
               })}
            </h1>
         </div>
      </div>
   );
};

export default Datetime;
