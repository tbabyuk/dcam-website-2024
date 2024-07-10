import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"


export const Footer = () => {
    return ( 
        <footer className="px-5 lg:px-10 py-8 flex flex-col-reverse gap-y-14 md:flex-row bg-dcam-dark-blue min-h-50 text-gray-50 font-roboto">
            <div className="flex-1">
                <h4 className="mb-6 inline-block border-b-2">FOLLOW US:</h4>
                    <div className="social-links flex">
                        <Link 
                            href="https://www.facebook.com/dacapomusic.ca/" 
                            target="_blank" 
                            className="dcam-hover-orange me-3">
                            <FaFacebookSquare size="2.5em"/> 
                        </Link>
                        <Link 
                            href="https://www.instagram.com/dacapomusic.ca/" 
                            target="_blank" 
                            className="dcam-hover-orange me-3">
                            <FaInstagramSquare size="2.5em" />
                        </Link>
                        <Link 
                            href="https://www.youtube.com/watch?v=gSPAOkyO4AA&feature=youtu.be" target="_blank"          
                            className="dcam-hover-orange">
                            <FaYoutubeSquare size="2.5em" />
                        </Link>
                    </div>
                    <div className="flex-1 mt-12">
                        <p className="mb-3">Educational Affiliates:</p>
                        <div className="flex flex-col text-[0.8rem] gap-2">
                            <a href="https://khrysmarmusic.ca/" target="_blank">
                                Khrysmar Music Studio
                                {/* <img src="khrysmar_logo_bw.png" width="70px" alt="Khrysmar Music Studio" /> */}
                            </a>
                            <a href="https://www.jonathanstuchbery.com/" target="_blank">
                                Jonathan Stuchbery
                            </a>
                        </div>
                    </div>
            </div>

            <div className="flex-1">
                <h4 className="mb-6 inline-block border-b-2">WHAT WE OFFER:</h4>
                <ul className="text-sm leading-7 font-light">
                    <li><Link href="#" className="dcam-hover-orange">Piano Lessons</Link></li>
                    <li><Link href="#" className="dcam-hover-orange">Guitar Lessons</Link></li>
                    <li><Link href="#" className="dcam-hover-orange">Drum Lessons</Link></li>
                    <li><Link href="#" className="dcam-hover-orange">Voice Lessons</Link></li>
                    <li><Link href="#" className="dcam-hover-orange">Music Theory Lessons</Link></li>
                    <li><Link href="#" className="dcam-hover-orange">Toddler Music Classes</Link></li>
                    <li><Link href="#" className="dcam-hover-orange">Intro to Music Program</Link></li>
                </ul>
            </div>
            <div className="flex-1">
                <h4 className="mb-6 inline-block border-b-2">LEARN MORE:</h4>
                <ul className="text-sm leading-7 font-light">
                    <li><Link href="/rates" className="dcam-hover-orange">Rates</Link></li>
                    <li><Link href="/teachers" className="dcam-hover-orange">Teachers</Link></li>
                    <li><Link href="/reviews" className="dcam-hover-orange">Reviews</Link></li>
                    {/* <li><Link href="/gallery" className="hover:text-lightRed">Gallery</Link></li> */}
                    <li><Link href="/about" className="dcam-hover-orange">About</Link></li>
                    <li><Link href="/contact" className="dcam-hover-orange">Contact</Link></li>
                    <li><Link href="/blog" className="dcam-hover-orange">Blog</Link></li>
                    {/* <li><Link href="/privacypolicy" className="hover:text-lightRed">Privacy Policy</Link></li> */}
                </ul>
            </div>
            <div className="flex-1">
                <h4 className="mb-6 inline-block border-b-2">CONTACT US:</h4>
                <ul className="text-sm leading-10 font-light">
                    <li><Link href="tel:+4162379595" className="dcam-hover-orange">(416) 237-9595</Link></li>
                    <li><Link href="mailto: info@dacapomusic.ca" className="dcam-hover-orange">info@dacapomusic.ca</Link></li>
                    <li><Link href="https://goo.gl/maps/S1fjfDa8jyphqcLw9" target="_blank" className="me-8 dcam-hover-orange">270 The Kingsway, Etobicoke, ON M9A 3T7</Link></li>
                </ul>
            </div>
        </footer>
     );
}