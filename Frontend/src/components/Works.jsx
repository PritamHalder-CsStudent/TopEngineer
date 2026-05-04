import React, { use } from 'react'
import m4 from '../assets/m4.webp'
import m2 from '../assets/m2.webp'
import m3 from '../assets/m3.webp'
import m1 from '../assets/m1.webp'
import m5 from '../assets/m5.webp'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Works = () => {
    const navigate=useNavigate();
  return (
    <div className='items-center '>
       <h1 className="text-3xl font-semibold text-center mx-auto">Explore the Library</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works </p>
            <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m4} />
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m2} alt="image" />
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m5} alt="image" />
                <img className="max-w-70 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300" 
                src={m1} alt="image" />
                
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
