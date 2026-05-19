import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
    const socialLinks = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1CiZ45DufR/" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
  ];

  const logoUrl='https://res.cloudinary.com/dxf93mjby/image/upload/v1779164892/logo_tgyahr.jpg';
  return (
    <div className='pt-20'>
        <footer className=" w-full bg-zinc-50 py-10 px-4 sm:px-6 md:px-10">

      <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">

        {/* ✅ Logo */}
        <img src={logoUrl} alt="logo" className="w-24" />

        {/* ✅ Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 text-sm text-zinc-600">

          <div>
            <h4 className="font-medium text-zinc-800">Address</h4>
            <p>14/21 New Ballygung,Kasba,KOLKATA-700039<br />West Bengal</p>
          </div>

          <div>
            <h4 className="font-medium text-zinc-800">Phone</h4>
            <p>+91 9641722155</p>
          </div>

          <div>
            <h4 className="font-medium text-zinc-800">Email</h4>
            <p>topengineer@gmail.in</p>
          </div>

        </div>

        {/* ✅ Description */}
        <p className="text-sm text-zinc-500 max-w-md leading-6">
          TopEngineer is your trusted partner for expert computer and laptop repairs, professional CCTV installation,
           and seamless network setup. We combine technical precision with creative excellence,
            delivering custom website development and maintenance solutions to keep your business connected and secure.
          </p>

        {/* ✅ Social Icons */}
        <div className="flex gap-4 text-lg">
            {socialLinks.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                    <span className="hover:scale-110 transition">{item.icon}</span>
            </a>
            ))}
        </div>

        {/* ✅ Bottom Line */}
        <div className="w-full border-t pt-4 mt-4 text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} TopEngineer. All Rights Reserved.
        </div>

      </div>
    </footer>
    </div>
    
  )
}

export default Footer