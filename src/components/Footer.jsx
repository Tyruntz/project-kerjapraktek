import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube,FaTwitter,FaInstagram,FaLinkedin   } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div id="lokasi">
      <div className="bg-[#2f0000] h-[500px] lg:h-[300px] grid">
        <div className=" grid place-content-center ">
          <div className=" text-center">
            <h1 className="font-bold text-5xl ">
              <span className="text-[#FDC82F]">JIM</span><span className="text-[#A3080C]">A</span> 
            </h1>
            <p className="text-white">Coffee House</p>
          </div>
        </div>
        <div className="m-3 grid content-start text-white">
          <h1 className="my-3">Costumer Service</h1>
          <div className=" flex flex-col gap-4">
            <div className="mx-3 flex items-center gap-3">
              <div>
                <FaLocationDot className="h-6 w-6" />
              </div>
              <div>
                Jl. Urai bawadi Gg. Tria 1 (no. 5), Kota Pontianak, Indonesia
              </div>
            </div>
            <div className="mx-3 flex items-center gap-3">
              <div>
                <IoLogoWhatsapp className="h-6 w-6" />
              </div>
              <div>0878-3223-4119</div>
            </div>
          </div>
        </div>
        <div className=" content-end">
          <div className="flex justify-center gap-3 mb-5 text-3xl">
            <div className="bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150"><FaYoutube className="" /></div>
            <div className="bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150"><FaTwitter /></div>
            <div className="bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150"><FaInstagram /></div>
            <div className="bg-white size-10 grid place-content-center rounded-full hover:scale-125 ease-in-out duration-150"><FaLinkedin /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
