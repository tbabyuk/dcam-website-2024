import { StudentPortalBtn } from "../sub-components/StudentPortalBtn"
import { CartBtn } from "../sub-components/CartBtn"
import { HiOutlineMail } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs";


export const Header = () => {

  return (
    <header className="min-h-[80px] bg-[url('/images/header_bg.png')] grid grid-cols-4 px-5">
        <div className="col-span-2 sm:col-span-1 md:col-span-1 flex justify-center items-center py-5">
            <img src="images/dcam_logo_white.png" className="h-[45px] flex-shrink-0" />
        </div>
        <div className="col-span-2 py-5 sm:col-span-3 md:col-span-2 flex justify-center sm:justify-evenly items-center">
            <div className="hidden sm:flex"><StudentPortalBtn /></div>
            <CartBtn />
        </div>
        <div className="col-span-4 md:col-span-1 flex flex-col items-center sm:flex-row sm:justify-between md:flex-col text-dcam-white py-4 border-t-2 border-dcam-white/50 md:border-none">
          <a href="mailto: info@dacapomusic.ca" className="flex items-center hover:text-dcam-orange mb-3 sm:mb-0 md:mb-2"><HiOutlineMail className="me-1" />info@dacapomusic.ca</a>
          <a href="tel:+14162379595" className="flex items-center hover:text-dcam-orange"><BsTelephone className="me-1" />(416) 237-9595</a>
        </div>
    </header>
  )
}