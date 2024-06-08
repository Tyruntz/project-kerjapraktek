import React, { useState, useEffect, useId } from "react";
import { useStore } from "@nanostores/react";
import { addItemToCart, cartItems } from "../stores/cartStore";
import Modal from "./Modal.jsx";
import { FaMugHot } from "react-icons/fa6";
import { FaRegSnowflake } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";




const CardMenu = (props) => {



   const [isOpen, setIsOpen] = useState(false);
   const openModal = () => setIsOpen(true);
   const $cartItems = useStore(cartItems);
   const [selectedVariant, setSelectedVariant] = useState(null);
   const [selectedPrice, setSelectedPrice] = useState(null);

   useEffect(() => {
      if (selectedVariant === "Panas") {
         setSelectedPrice(props.hargapanas);
      } else if (selectedVariant === "Dingin") {
         setSelectedPrice(props.hargadingin);
      }
   }, [selectedVariant]);

   


   

   const handleAddToCart = () => {
      if (selectedVariant) {
         const existingItem = $cartItems.find(
            (item) => item.id === props.id && item.variant === selectedVariant
         );
         if (existingItem) {
            existingItem.quantity += 1;
         } else {
            
            addItemToCart({
               id: props.id + selectedVariant,
               itemId: props.id,
               name: props.nama + " " + selectedVariant,
               price: selectedPrice,
               variant: selectedVariant,
               imgurl: props.imgurl,
               quantity: 1,
            });
            setIsOpen(false);
         }
      } else {
         alert("Please select a variant");
      }
   };

   return (
      <>
         <div key={props.id} className="h-auto w-[150px] p-2 shadow-md">
            <img
               className="h-[120px] rounded-t-lg hover:opacity-50 object-cover w-full transition ease-in-out duration-150"
               src={props.imgurl}
               alt={props.nama}
            />
            <div className="text-sm">
               <p className="text-center text-lg">{props.nama}</p>
               <table className="text-center w-full">
            <thead>
              <tr className="text-center text-gray-400">
                <th>Hot</th>
                <th>Cold</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-sm">
                <td>
                  
                  {props.hargapanas ? (props.hargapanas/1000)+"K" : "-"}
                </td>
                <td>
                  
                  {props.hargadingin ? (props.hargadingin/1000)+"K" : "-"}
                </td>
              </tr>
             
            </tbody>
          </table>
               <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
                  <h2 className="text-xl mb-4">
                     {selectedVariant
                        ? props.nama + " " + selectedVariant
                        : props.nama}
                  </h2>
                  <div className="flex">
                     <div>
                        <img
                           src={props.imgurl}
                           className="h-[200px] w-[200px] object-cover rounded-md"
                           alt=""
                        />
                     </div>
                     <div className="flex flex-col p-5 justify-between items-center">
                        <h3>Pilih Varian</h3>
                        <div className="flex gap-2 m-2">
                           <button
                              className={`${
                                 selectedVariant === "Panas"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-black"
                              } p-4 flex flex-col justify-center items-center rounded-md mr-2`}
                              onClick={() => setSelectedVariant("Panas")}
                              disabled={props.hargapanas === null}
                           >
                             <FaMugHot className="h-6 w-6" />
                             Panas
                           </button>
                           <button
                           

                              className={`${
                                 selectedVariant === "Dingin"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-black"
                              } p-4 flex flex-col justify-center items-center  rounded-md`}
                              onClick={() => setSelectedVariant("Dingin")}
                              disabled={props.hargadingin === null}
                           >
                             <FaRegSnowflake className="h-6 w-6" />
                             Dingin
                           </button>
                        </div>
                        <p>Harga : 
                           {selectedVariant == "Panas"
                              ? " Rp. " + props.hargapanas
                              : selectedVariant == "Dingin"
                              ? " Rp. " + props.hargadingin
                              : ""}
                        </p>

                        <button
                           onClick={handleAddToCart}
                           className="bg-blue-500 hover:scale-110 transition-all ease-in-out text-white px-4 py-2 rounded-md mt-2"
                        >
                           Add to Cart
                        </button>
                     </div>
                  </div>
               </Modal>
            </div>
            <div className="flex justify-center items-center">
               <button
                  className="bg-yellow-400 py-1 text-sm flex justify-center items-center w-full rounded-md hover:scale-110 transition-all ease-in-out"
                  onClick={openModal}
               >
                  <FaCartPlus className="h-4 w-4"  />
               </button>
            </div>
         </div>
      </>
   );
};

export default CardMenu;
