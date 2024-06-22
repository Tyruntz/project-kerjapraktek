import React from "react";

const About = (props) => {
   return (
      <div id="about" className="grid grid-rows-3 w-full gap-3">
         <section className="">
            <h4 className="ml-6">━━━━
            Our Story</h4>
            <h1 className="my-4 text-5xl font-bold ml-8">Mari berkenalan</h1>
            <div className="lg:flex">
               <div className="my-3 w-full lg:w-[80rem]">
                  <p className="text-left lg:text-2xl">
                     Mari berkenalan dengan tim kami mulai dari toko,
                     lingkungan, dan orang-orang yang bekerja bersama kami!
                  </p>
               </div>
               <div className=" w-full">
                  <img
                     src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/C1B9322C-4591-46BB-B357-A4289FB3D84E.jpg"
                     alt="coffee"
                     className="w-full h-[600px] object-cover object-center"
                  />
                  
               </div>
            </div>
         </section>
         <section className="">
            <h4 className="ml-6">━━━━ Tell a Story</h4>
            <h1 className="my-4 text-5xl font-bold ml-8">Penting untuk hari ini</h1>
            <div className="lg:flex">
               <div className="my-3 w-full lg:w-[80rem]">
                  <p className="text-start lg:text-2xl">
                     Di dunia yang serba cepat, mudah sekali kita kehilangan
                     fokus terhadap apa yang sebenarnya penting. Jima
                     menyediakan tempat bernaung, dimana kamu bisa beristirahat
                     sejenak dan menikmati secangkir kopi buatan dari Hati. Jima
                     ingin menginspirasi orang untuk menyadari hal penting dalam
                     kehidupan di tengah-tengah kesibukan mereka melalui tiap
                     minuman yang kami sajikan
                  </p>
               </div>
               <div className=" w-full">
                  <img
                     src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/8543918D-D235-4968-BADE-CC3D638968A9.JPG"
                     alt="coffee"
                     className="w-full h-[400px] object-cover object-center"
                  />
                  <div className=" top-0 right-0 h-full w-11/12 bg-gradient-to-r from-transparent to-white"></div>
               </div>
            </div>
         </section>
         <section className="">
            <h4 className="ml-6">━━━━ About Jima</h4>
            <h1 className="my-4 text-5xl font-bold ml-8">Cerita Kami</h1>
            <div className="lg:flex">
               <div className="my-3 w-full lg:w-[80rem]">
                  <p className="text-start lg:text-2xl">
                     Didirikan pada tahun 2023, Jima Coffee adalah startup kopi
                     yang bercita-cita membuat kopi spesial terbaik untuk
                     pelanggan. Kami ingin kehadiran kami bisa meningkatkan
                     kualitas kopi dalam komunitas kita. Dengan jaringan dan
                     pengalaman, kami menggunakan teknologi terkini untuk alat
                     dan biji kopi kami. Diambil langsung dari petani pilihan,
                     biji kopi berkualitas tinggi diproses dan dipanggang
                     sempurna oleh kami, dan diajarkan kepada barista kompeten
                     kami, dengan semangat untuk menyajikan satu cangkir
                     kebahagiaan hanya untuk kamu.
                  </p>
               </div>
               <div className=" w-full">
                  <img
                     src="https://wxnmwtambphlaobvcbaa.supabase.co/storage/v1/object/public/images/images/IMG_3983.jpg"
                     alt="coffee"
                     className="w-full h-[400px] object-cover object-center"
                  />
                  <div className=" top-0 right-0 h-full w-11/12 bg-gradient-to-r from-transparent to-white"></div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;
