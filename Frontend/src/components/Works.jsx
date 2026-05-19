import React, { use } from 'react'

import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Works = () => {
    const navigate=useNavigate();
    const m4Url='https://res.cloudinary.com/dxf93mjby/image/upload/v1779165872/m4_blyk4c.webp';
    const m2Url="https://res.cloudinary.com/dxf93mjby/image/upload/v1779165855/m2_g22v5e.webp";
    const m5Url='https://res.cloudinary.com/dxf93mjby/image/upload/v1779165887/m5_jrrmvy.webp';
    const m1Url='https://res.cloudinary.com/dxf93mjby/image/upload/v1779165839/m1_ydjhzj.webp';
  return (
    <div className='items-center '>
       <h1 className="text-3xl font-semibold text-center mx-auto">Explore the Library</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works </p>
            <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m4Url} />
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m2Url} alt="image" />
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m5Url} alt="image" />
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m1Url} alt="image" />
                
            </div>
            <div className='pt-2  text-center justify-center'>
                <p className="text-sm text-slate-500 text-center justify-center  mt-2 max-w-lg mx-auto">To see more works, please visit our facebook page.</p>
                <button className='text-blue-400 cursor-pointer '  onClick={()=>window.open('https://www.facebook.com/share/1CiZ45DufR/', '_blank')}>
                   view more   
                </button>
                
            </div>
    </div>
  )
}

export default Works
