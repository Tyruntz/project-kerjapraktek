import React from "react";
import { FaPhoneVolume,FaLocationDot  } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Kontak = () => {
  return (
    <>
    <div className="flex flex-col justify-center h-full items-center">
      <h1 className="text-4xl">Contact Us</h1>
      <p className="p-3 text-center text-gray-400 text-sm">For any support,
       please mail to <span className="text-blue-500 underline" onClick={()=>{}}> jimacorp@gmail.com</span>,
      our support team will get back to you within 24 hours.
      </p>
      

      <form action="" method="post">
    <div className="grid p-5 gap-3 grid-rows-6 grid-flow-row">
      <input className="border-orange-500 rounded-md" placeholder="Name" type="text" />
      <div className="grid gap-2 grid-flow-col grid-cols-2">
        <input className="border-orange-500 rounded-md" placeholder="Email Address" type="text" />
        <input className="border-orange-500 rounded-md" placeholder="Phone Number" type="text" />
      </div>
      <textarea placeholder="Enter message..." className="row-span-3 border-orange-500 rounded-md" name="" id="" cols="" rows=""></textarea>
      <button type="submit" className="bg-blue-500 p-2 text-white rounded-md">SUBMIT</button>

    </div>
      </form>
    </div>

    </>
  );
};

export default Kontak;
