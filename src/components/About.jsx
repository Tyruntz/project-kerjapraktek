import React from "react";

const About = (props) => {
   return (
      <div id="about" className="grid grid-rows-3 w-full gap-16">
         <section>
            <h4 className="ml-6">--- Tentang Jima</h4>
            <h1 className="my-4 text-5xl font-bold ml-8">About</h1>
            <div className="lg:flex">
               <div className="my-3 w-80 lg:w-[80rem]">
                  <p className="text-start lg:text-2xl">
                     This is a simple app to demonstrate how to use Tailwind CSS
                     with React. Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Alias, cupiditate?
                  </p>
               </div>
               <div className=" w-full">
                  <img
                     src="src\assets\images\about1.jpg"
                     alt="coffee"
                     className="w-full h-[400px] object-cover object-center"
                  />
                  <div className=" top-0 right-0 h-full w-11/12 bg-gradient-to-r from-transparent to-white"></div>
               </div>
            </div>
         </section>
         <section className="">
            <h4 className="ml-6">--- Tentang Jima</h4>
            <h1 className="my-4 text-5xl font-bold ml-8">About</h1>
            <div className="lg:flex">
               <div className="my-3 w-80 lg:w-[80rem]">
                  <p className="text-start lg:text-2xl">
                     This is a simple app to demonstrate how to use Tailwind CSS
                     with React. Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Alias, cupiditate?
                  </p>
               </div>
               <div className=" w-full">
                  <img
                     src="src\assets\images\about2.jpg"
                     alt="coffee"
                     className="w-full h-[400px] object-cover object-center"
                  />
                  <div className=" top-0 right-0 h-full w-11/12 bg-gradient-to-r from-transparent to-white"></div>
               </div>
            </div>
         </section>
         <section className="">
            <h4 className="ml-6">--- Tentang Jima</h4>
            <h1 className="my-4 text-5xl font-bold ml-8">About</h1>
            <div className="lg:flex">
               <div className="my-3 w-80 lg:w-[80rem]">
                  <p className="text-start lg:text-2xl">
                     This is a simple app to demonstrate how to use Tailwind CSS
                     with React. Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Alias, cupiditate?
                  </p>
               </div>
               <div className=" w-full">
                  <img
                     src="src\assets\images\about3.jpg"
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
