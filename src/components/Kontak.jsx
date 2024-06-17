import React from "react";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { useRef,useEffect,useState } from "react";


const Kontak = () => {
    const [name, setName] = useState('');
    const [email, seEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_1ud0p7j';
        const templateID = 'template_2h3rdqg';
        const publicKey = 'Bpb3lYKY2-8NlmXRK';
        

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Jima',
            message: message,
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) =>{
      console.log('SUCCESS!', response );
      setName('');
      seEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.log('FAILED...', error);
    });
  }

   return (
      <>
         <div className="flex flex-col justify-center h-full items-center">
            <h1 className="text-4xl">Contact Us</h1>
            <p className="p-3 text-center text-gray-400 text-sm">
               For any support, please mail to{" "}
               <span className="text-blue-500 underline" onClick={() => {}}>
                  {" "}
                  jimacorp@gmail.com
               </span>
               , our support team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} method="post">
               <div className="grid p-5 gap-3 grid-rows-6 grid-flow-row">
                  <input
                     className="border-orange-500 rounded-md"
                     placeholder="Name"
                     type="text"
                     name="user_name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
                  <div className="grid gap-2 grid-flow-col grid-cols-2">
                     <input
                        className="border-orange-500 rounded-md"
                        placeholder="Email Address"
                        type="text"
                        name="user_email"
                        value={email}
                        onChange={(e) => seEmail(e.target.value)}
                     />
                     <input
                        className="border-orange-500 rounded-md"
                        placeholder="Phone Number"
                        type="text"
                        name="phone"
                     />
                  </div>
                  <textarea
                     placeholder="Enter message..."
                     className="row-span-3 border-orange-500 rounded-md"
                     name="message"
                     id=""
                     cols=""
                     rows=""
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}

                  ></textarea>
                  <button
                     type="submit"
                     className="bg-[#8c0000] p-2 text-white rounded-md"
                     value="Send"
                  >
                     SUBMIT
                  </button>
               </div>
            </form>
         </div>
      </>
   );
};

export default Kontak;
