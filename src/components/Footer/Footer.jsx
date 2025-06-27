import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';

const Footer = () => {

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
        <div className='container mx-auto text-center'>
            <h2 className='text-xl font-semibold text-[#009999]'>
                Prakhar Dwivedi
            </h2>
            <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
                {[
                    { name:"About", id:"about" },
                    { name:"Skills", id:"skills" },
                    { name:"Experience", id:"experience" },
                    { name:"Projects", id:"projects" },
                    { name:"Education", id:"education" },
                ].map((item, index) => (
                    <button
                    key={index}
                    onClick={() => handleScroll(item.id)}
                    className='hover:text-[#006666] text-sm sm:text-base my-1'
                    >
                        {item.name}
                    </button>
                ))}
            </nav>

            <div className='flex flex-wrap justify-center space-x-4 mt-6'>
                {[
                    { icon: <FaTwitter />, link:"https://x.com/P_dwivedi_"},
                    { icon: <FaLinkedin />, link:"https://www.linkedin.com/in/dwivediprakhar/"},
                    { icon: <FaInstagram />, link:"https://www.instagram.com/prakhar_dwivedi18?igsh=Y2ZqNjZzdTRlbzJz"},
                    { icon: <FaTelegram />, link:"http://t.me/Prakhar_8Dwivedi"},
                ].map((item, index) => (
                    <a 
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xl hover:text-[#006666] transition-transform transform hover:scale-110'
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            <p className='text-sm text-gray-400 mt-6'>
                 © 2025 Prakhar Dwivedi. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
