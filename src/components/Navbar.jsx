import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = ({id1,id2,id3,id4,id5}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleActive = () => {
            
           
        }
    }
    , []);



  return (
    
        <nav className="bg-white border-b px-3 uppercase fixed w-full flex justify-center h-[40px]">
				<ul className=" flex gap-3 items-center w-auto">
					
					<li><a onClick={
                        () => setIsOpen(!isOpen)
                    
                    } className={
                        isOpen ? "text-blue-500" : "text-black"
                    } href={id1}>Home</a></li>	
					<li><a href={id2}>Menu</a></li>	
					<li><a href={id3}>About</a></li>	
					<li><a href={id4}>Partnership</a></li>	
					<li><a href={id5}>Contact</a></li>	
				</ul>
			</nav>
    
  )
}

export default Navbar