import { BsPeopleFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { HomeSectionHeading } from "../components/HomeSectionHeading";



export const HomeOffersSection = () => {

  return (
        <section className="offers px-5 lg:px-36 xl:px-52 py-20 text-white bg-dcam-light-blue relative">
        <img src="images/home/notes_light.svg" className="absolute left-3 top-3 w-[110px]" />
        <img src="images/home/notes_light.svg" className="absolute right-2 bottom-2 w-[110px]" />
        <HomeSectionHeading title="WHAT WE OFFER" textColor="text-dcam-white" />
        {/* <h2 className="mb-20 text-center text-3xl font-semibold pb-2 font-ovo">WHAT WE OFFER</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
            <div className="flex items-center">
                <BsPeopleFill size="4rem" className="offers-icon" />
                {/* <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>group</span> */}
                <div className="ps-6 flex flex-col justify-center">
                    <h2 className="text-xl font-ovo font-semibold">ALL AGES & LEVELS</h2>
                    <p>Lessons for children, adults and even toddlers!</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaUserGraduate size="4rem" className="offers-icon" />
                <div className="ps-6 flex flex-col justify-center">
                    <h2 className="text-xl font-ovo font-semibold">EXAM PREP</h2>
                    <p>We prepare students for RCM and other music exams</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaCalendarAlt size="4rem" className="offers-icon" />
                <div className="ps-6 flex flex-col justify-center">
                    <h2 className="text-xl font-ovo font-semibold">FLEXIBILITY</h2>
                    <p>Choose 30-minute, 45-minute, or 1-hour lessons</p>
                </div>
            </div>
            <div className="flex items-center">
                <SiGooglemybusiness size="4rem" className="offers-icon" />
                <div className="ps-6 flex flex-col justify-center">
                    <h2 className="text-xl font-ovo font-semibold">WONDERFUL VENUE</h2>
                    <p>Individual music rooms, recital area and a lounge</p>
                </div>
            </div>
            <div className="flex items-center">
                <FaLocationDot size="4rem" className="offers-icon" />
                <div className="ps-6 flex flex-col justify-center">
                    <h2 className="text-xl font-ovo font-semibold">GREAT LOCATION</h2>
                    <p>Humbertown Plaza: free parking, shops and cafés</p>
                </div>        
            </div>
            <div className="flex items-center">
                <FaWallet size="4rem" className="offers-icon" />
                <div className="ps-6 flex flex-col justify-center">
                    <h2 className="text-xl font-ovo font-semibold">AWESOME DEALS</h2>
                    <p>Referral incentives and family member discounts!</p>
                </div> 
            </div>
        </div>
    </section>
  )
}