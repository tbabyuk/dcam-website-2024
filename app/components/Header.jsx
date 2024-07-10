"use client"

import Link from "next/link";
import { useRef } from "react";
import { StudentPortalModal } from "./StudentPortalModal";
import { CartBtn } from "./CartBtn";
import { HiOutlineMail } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs";


export const Header = () => {

  const studentPortalModalRef = useRef();


  return (
    
    <header className="min-h-[80px] bg-[url('/images/header_bg.png')] grid grid-cols-7 px-5">

        <div className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 flex justify-center items-center py-5">
          <Link href="/">
            <img src="/images/dcam_logo_white.png" alt="Da Capo Academy of Music logo" className="h-[45px] flex-shrink-0" />
          </Link>
        </div>

        <div className="col-span-3 sm:col-span-4 md:col-span-3 xl:col-span-4 flex justify-center sm:justify-evenly items-center">
            <div className="hidden sm:flex">
              <button className="header-btn" onClick={() => studentPortalModalRef.current.showModal()}><img src="/images/mms_logo.png" alt="MyMusicStaff Logo" className="w-5 me-1 "/>Student Portal</button>
            </div>
            <CartBtn />
        </div>
        
        <div className="col-span-7 md:col-span-2 xl:col-span-2 flex flex-col items-center justify-center sm:flex-row sm:justify-around md:flex-col xl:flex-row xl:items-center text-dcam-white py-5 border-t-2 border-dcam-white/50 md:border-none">
          <a href="mailto: info@dacapomusic.ca" className="flex items-center hover:text-dcam-orange mb-2 sm:mb-0 md:mb-1"><HiOutlineMail className="me-1" />info@dacapomusic.ca</a>
          <a href="tel:+14162379595" className="flex items-center hover:text-dcam-orange"><BsTelephone className="me-1" />(416) 237-9595</a>
        </div>
        <StudentPortalModal studentPortalModalRef={studentPortalModalRef} />
    </header>
  )
}