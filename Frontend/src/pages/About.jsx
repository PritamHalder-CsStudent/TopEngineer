import React from 'react'
import main2 from '../assets/main2.webp'
import { FaHome } from 'react-icons/fa'; 
import { FaFastForward } from 'react-icons/fa';
import { BsSpeedometer } from 'react-icons/bs';
import { FaMoneyBillWave, FaPiggyBank } from 'react-icons/fa';

const About = () => {
  return (
    <div className=''>
       <h1 className="text-3xl font-semibold text-center mx-auto">About our Company </h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
               TopEngineer is your trusted partner for expert computer and laptop repairs, professional CCTV installation,
           and seamless network setup.
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <div className="size-[600px] rounded-full absolute blur-[300px] -z-10 bg-[#97988b]"></div>
                <img className="max-w-sm w-full rounded-xl h-auto"
                   src={main2} />
                <div>
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">

                    We combine technical precision with creative excellence, Tech maintenance solutions and delivering custom website development to keep your business connected and secure.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <BsSpeedometer/>
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Fast Services and Installation </h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <FaHome/>
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Home Service Available</h3>
                                <p className="text-sm text-slate-500">We are provide door to door service for anytype of Tech. Problems</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <FaMoneyBillWave/>
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Affordable Pricing</h3>
                                <p className="text-sm text-slate-500">Transparent and competitive pricing for all our services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About
