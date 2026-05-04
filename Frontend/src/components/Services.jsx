import React, { useRef } from 'react'
import { services } from '../assets/assets.js'
import video from '../assets/video.mp4'
import { useState } from 'react'
import Works from './Works.jsx'
import { useNavigate } from 'react-router-dom'

const Services = () => {
      const navigate=useNavigate();   
  return (
     <div className='mt-5 px-6 md:px-20 lg:px-32 py-10'>
       <p className='text-2xl  md:text-3xl font-medium'>Our Services</p>
       <div onClick={()=>navigate('/Works')} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6
            lg:grid-cols-5 mt-6 lg:pl-6'>  
            {services.map((service,index)=>(
                <div key={index} className='flex flex-col  items-center justify-center pl-2 gap-2 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer'>
                    <img src={service.img} alt={service.name} className='w-20 h-20 object-contain' />
                    <p className='text-sm text-center'>{service.name}</p>
                </div>  
            ))}   
       </div>
      
    </div>
  )
}

export default Services
