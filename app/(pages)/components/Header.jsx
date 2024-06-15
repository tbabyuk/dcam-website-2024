import { StudentPortalBtn } from "../sub-components/StudentPortalBtn"
import { CartBtn } from "../sub-components/CartBtn"
import { HiOutlineMail } from "react-icons/hi"
import { BsTelephone } from "react-icons/bs";


export const Header = () => {

  return (
    <header className="h-[80px] bg-[url('/images/header_bg.png')] flex justify-between items-center px-6">
        <div className="flex-1">
          <img src="images/dcam_logo_white.png" className="h-[50px]" />
        </div>
        <div className="flex-1 flex justify-around">
          <StudentPortalBtn />
          <CartBtn />
        </div>
        <div className="flex-1 flex justify-end text-dcam-white">
          <a href="mailto: info@dacapomusic.ca" className="flex items-center hover:text-dcam-orange"><HiOutlineMail className="me-1" />info@dacapomusic.ca</a>
          <a href="tel:+14162379595" className="flex items-center ms-6 hover:text-dcam-orange"><BsTelephone />(416) 237-9595</a>
        </div>
    </header>
  )
}

export default Header