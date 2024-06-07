import React from "react";
import { FaPhoneVolume,FaLocationDot  } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Kontak = () => {
  return (
    <>
      <div id="contact" className="flex min-h-screen w-full flex-col justify-start">
        <div className="m-4 text-center">
          <h1 className="text-3xl font-bold text-green-700">Hubungi Kami</h1>
          <p>Ada pertanyaan atau komentar? Cukup tulis pesan kepada kami!</p>
        </div>
        <div className="m-10 mx-5 h-full rounded-lg bg-slate-400 text-[14px] text-white shadow-lg">
          <div className="m-5 flex flex-col gap-5">
            <h1 className="font-medium underline">Informasi Kontak</h1>
            <p>
              Jika Anda mempunyai pertanyaan atau kekhawatiran, Anda dapat
              menghubungi kami dengan mengisi formulir kontak, menelepon kami,
              datang ke kantor kami, menemukan kami di jejaring sosial lain,
              atau Anda dapat mengirim email pribadi kepada kami di:
            </p>
            <div className="flex gap-6">
            <FaPhoneVolume className="h-6 w-6" />
              <h1>0878-3223-4119</h1>
            </div>
            <div className="flex gap-6">
            <IoMail className="h-6 w-6" />
              <h1>jimacorp@gmail.com</h1>
            </div>
            <div className="grid grid-flow-col gap-6">
            <FaLocationDot className="h-6 w-6" />
              <h1>
                Jima Coffee, Jl. Uray Bawadi Gg. Tria I No.5, Sungai Bangkong,
                Kec. Pontianak Kota, Kota Pontianak,
                Kalimantan&nbsp;Barat&nbsp;78116
              </h1>
            </div>
          </div>
        </div>
        <div className="m-5">
          <form className="flex flex-col" action="">
            <label htmlFor="nama">Nama</label>
            <input
              className="h-9 rounded-md border border-black p-2"
              type="text"
              name="Nama"
              id="Nama"
              placeholder="Masukan Nama"
            />
            <label htmlFor="email">Email</label>
            <input
              className="h-9 rounded-md border border-black p-2"
              type="email"
              name="Nama"
              id="Nama"
              placeholder="Masukan Email"
            />
            <label htmlFor="pesan">Pesan</label>
            <textarea
              className="rounded-md border border-black p-2"
              name="pesan"
              id="pesan"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <button
              className="mt-3 h-9 rounded-md border border-black bg-slate-500 hover:scale-105 ease-in-out duration-300"
              type="submit"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kontak;
