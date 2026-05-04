import React from 'react'
import { useState } from 'react'
import { IoCallOutline } from "react-icons/io5";
import logo from '../assets/logo.jpg'
import { useNavigate, NavLink } from 'react-router-dom'; // Changed Link to NavLink

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navItems = [
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'About', path: '/about' }
    ];
    
    const navigate = useNavigate();

    return (
        <>
            <nav className="bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative">
                <h2 className="flex items-center">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        onClick={() => navigate('/services')} 
                        className="w-14 h-14 inline-block mr-2 cursor-pointer" 
                    />
                    TopEngineer
                </h2>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-linear-to-r from-gray-400 to-gray-600 border border-white/15 rounded-full px-1 py-1 gap-2 ">
                    {navItems.map((item) => (
                        <NavLink 
                            key={item.name} 
                            to={item.path} 
                            className={({ isActive }) => `px-4 py-1.5 rounded-full text-sm transition-colors ${
                                isActive 
                                ? 'bg-white border border-zinc-200 font-medium text-zinc-800' 
                                : 'text-white hover:text-zinc-400'
                            }`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <a href="tel:9641722155" className='bg-linear-to-r from-gray-400 to-gray-600 border border-white/15 hidden md:flex items-center gap-3 px-2 py-1 pr-4 rounded-full no-underline'>
                    <div className='size-10 rounded-full border-2 border-[#f3f1f9] flex items-center justify-center'>
                        <IoCallOutline className='text-[#efedf6] text-lg' />
                    </div>
                    <span className="text-slate-100 text-sm">Book a call</span>
                </a>

                {/* Mobile Hamburger */} 
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                        {navItems.map((item) => (
                            <NavLink 
                                key={item.name} 
                                to={item.path} 
                                onClick={() => setMenuOpen(false)} // Close menu on click
                                className={({ isActive }) => `px-4 py-2.5 rounded-full text-sm ${
                                    isActive 
                                    ? 'bg-gray-400 font-medium text-white' 
                                    : 'text-zinc-500'
                                }`}
                            >
                                {item.name}
                            </NavLink>
                        ))}

                        <a href="tel:9641722155" className='bg-linear-to-r from-gray-400 to-gray-600 border border-white/15 flex items-center gap-3 px-2 py-1 pr-4 rounded-full mt-4 no-underline'>
                            <div className='size-10 rounded-full border-2 border-[#f2f1f4] flex items-center justify-center'>
                                <IoCallOutline className='text-[#f7f6fb] text-lg' />
                            </div>
                            <span className="text-slate-100 text-sm">Book a call</span>
                        </a>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;
