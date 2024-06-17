import React from "react";

const Kategori = ({title, children}) => {
   return (
      <div className=" border rounded-md h-auto p-3 m-3">
         <h1 className="text-center font-bold">{title}</h1>
         <div className="grid content-center h-[250px] grid-flow-col gap-1 overflow-x-auto scroll-smooth scrollbar-hide">
            {children}
         </div>
      </div>
   );
};

export default Kategori;
