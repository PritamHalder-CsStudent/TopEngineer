import React from 'react'
import mainBann from '../assets/mainBann.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const MainBanner = () => {
  const socialLinks = [
      { icon: <FaFacebook />, link: "https://www.facebook.com/share/1CiZ45DufR/" },
      { icon: <FaInstagram />, link: "https://instagram.com" },
      { icon: <FaYoutube />, link: "https://youtube.com" },
    ];
  const mobileBannUrl='https://res.cloudinary.com/dxf93mjby/image/upload/v1779164803/mobileBann_a3unhi.jpg';  

  return (
    <div className='relative w-full h-[80vh] md:h-auto overflow-hidden bg-gray-900'>
        {/* Background Images with Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" /> 
        <img 
          src={mainBann}
          alt="Main Banner" 
          className='absolute inset-0 w-full h-full object-cover hidden md:block' 
        />
        <img 
          src={mobileBannUrl} 
          alt="Mobile banner" 
          className='absolute inset-0 w-full h-full object-cover md:hidden' 
        />

        {/* Content Container */}
        <div className='relative z-20 h-full flex flex-col items-center md:items-start justify-center px-6 md:pl-20 lg:pl-10'>
          
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center md:text-left leading-tight max-w-sm md:max-w-md'>
            Your One-Stop <span className="text-red-500">Tech Support</span> Hub
          </h1>

          <p className='mt-4 text-gray-200 text-lg md:text-xl text-center md:text-left max-w-xs md:max-w-lg'>
            Quality service with genuine parts and expert technicians.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row items-center mt-8 mb-2 gap-10 w-full sm:w-auto'>
            <Link to="/contact" className='group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white  transition-all shadow-lg'>
                Get Services
                <FaArrowRight className='transition group-hover:translate-x-1' />
            </Link>
            
          { /* <Link to="/products" className='group flex items-center justify-center gap-2 text-white font-semibold hover:text-red-400 transition-colors'>
                Explore deals
                <FaArrowRight className='text-sm transition group-hover:translate-x-1' />
            </Link> */}


          </div>

          {/* Social Icons - Slightly smaller for mobile */}
          <div className='absolute md:top-10 md:right-10 z-30 flex md:flex-col items-center gap-6 mt-12 md:mt-0 bottom-10 md:bottom-auto left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0'>
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className=' text-2xl text-white hover:text-red-500 transition-colors cursor-pointer '
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MainBanner
