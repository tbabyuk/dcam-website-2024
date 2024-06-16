"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";



export const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lessonsSubmenuIsOpen, setLessonsSubmenuIsOpen] = useState(false);
  const [toolsSubmenuIsOpen, setToolsSubmenuIsOpen] = useState(false);


  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };



  return (
    <>
        <div className="hidden relative bg-dcam-reg-blue text-dcam-white h-[45px] md:flex items-center justify-center">
            <ul className="flex items-center bg-orange-800 h-full">
                <li className="h-full w-full">
                    <Link href="/" className="nav-link hover:bg-dcam-dark-blue">Home</Link>
                </li>
                <li className="h-full w-full relative">
                    <Link href="#" className="nav-link" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>Lessons <IoIosArrowDown className="ms-2 mt-1" /></Link>
                    {lessonsSubmenuIsOpen && (
                        <ul className="w-[200px] bg-red-400 absolute" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                            <li className="h-full w-full">
                                <Link href="/piano-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue">
                                    Piano Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/guitar-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue">
                                    Guitar Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/drum-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue">
                                    Drum Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/voice-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue">
                                    Voice Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/music-theory-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue">
                                    Music Theory Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/toddler-music-classes" className="nav-link hover:bg-dcam-dark-blue">
                                    Toddler Music Classes
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="h-full w-full">
                    <Link href="/rates" className="nav-link hover:bg-dcam-dark-blue">Rates</Link>
                </li>
                <li className="h-full w-full">
                    <Link href="/teachers" className="nav-link hover:bg-dcam-dark-blue">Teachers</Link>
                </li>
                <li className="h-full w-full">
                    <Link href="/reviews" className="nav-link hover:bg-dcam-dark-blue">Reviews</Link>
                </li>
                <li className="h-full w-full">
                    <Link href="/about" className="nav-link hover:bg-dcam-dark-blue">About</Link>
                </li>
                <li className="h-full w-full">
                    <Link href="/contact" className="nav-link hover:bg-dcam-dark-blue">Contact</Link>
                </li>
                <li className="h-full w-full">
                    <Link href="/careers" className="nav-link hover:bg-dcam-dark-blue">Careers</Link>
                </li>
                <li className="h-full w-full">
                    <Link href="#" className="nav-link" onMouseEnter={() => setToolsSubmenuIsOpen(true)} onMouseLeave={() => setToolsSubmenuIsOpen(false)}>Tools <IoIosArrowDown className="ms-2 mt-1" /></Link>
                    {toolsSubmenuIsOpen && (
                        <ul className="w-[200px] bg-red-400 absolute" onMouseEnter={() => setToolsSubmenuIsOpen(true)} onMouseLeave={() => setToolsSubmenuIsOpen(false)}>
                            <li className="h-full w-full">
                                <Link href="piano-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue">
                                    RCM Wizard
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="h-full w-full">
                    <Link href="/shop" className="nav-link hover:bg-dcam-dark-blue">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>

        <div className="md:hidden bg-dcam-reg-blue h-[45px] relative flex flex-row">
            <RxHamburgerMenu className="absolute left-2 h-full text-dcam-white hover:cursor-pointer" size="2rem" onClick={handleDrawerToggle} />
            {isDrawerOpen && (
                <ul className="absolute left-0 -bottom-[45px] flex flex-col w-full h-full">
                    <li className="h-full w-full">
                        <Link href="/" className="mobile-nav-link hover:bg-dcam-dark-blue">Home</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="#" className={`mobile-nav-link ${lessonsSubmenuIsOpen && "border-none"}`} onClick={() => setLessonsSubmenuIsOpen(!lessonsSubmenuIsOpen)}>Lessons <IoIosArrowDown className="ms-2 mt-1" /></Link>
                    </li>
                    {lessonsSubmenuIsOpen && (
                        <>
                            <li className="h-full w-full">
                                <Link href="/piano-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                                    Piano Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/guitar-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                                    Guitar Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/drum-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                                    Drum Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/voice-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                                    Voice Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/music-theory-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                                    Music Theory Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/toddler-music-classes" className="mobile-nav-link hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                                    Toddler Music Classes
                                </Link>
                            </li>
                        </>
                    )}
                    <li className="h-full w-full">
                        <Link href="/rates" className="mobile-nav-link hover:bg-dcam-dark-blue">Rates</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/teachers" className="mobile-nav-link hover:bg-dcam-dark-blue">Teachers</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/reviews" className="mobile-nav-link hover:bg-dcam-dark-blue">Reviews</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/about" className="mobile-nav-link hover:bg-dcam-dark-blue">About</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/contact" className="mobile-nav-link hover:bg-dcam-dark-blue">Contact</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/careers" className="mobile-nav-link hover:bg-dcam-dark-blue">Careers</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="#" className={`mobile-nav-link ${toolsSubmenuIsOpen && "border-none"}`} onClick={() => setToolsSubmenuIsOpen(!toolsSubmenuIsOpen)}>Tools <IoIosArrowDown className="ms-2 mt-1" /></Link>
                    </li>
                    {toolsSubmenuIsOpen && (
                        <li className="h-full w-full">
                            <Link href="piano-lessons-etobicoke" className="mobile-nav-link hover:bg-dcam-dark-blue" onMouseEnter={() => setToolsSubmenuIsOpen(true)} onMouseLeave={() => setToolsSubmenuIsOpen(false)}>
                                RCM Wizard
                            </Link>
                        </li>
                    )}
                    <li className="h-full w-full">
                        <Link href="/shop" className="mobile-nav-link hover:bg-dcam-dark-blue">
                            Shop
                        </Link>
                    </li>
                </ul>
            )}
        {/* Logo, Mobile Menu Button, Mobile Drawer */}
        </div>
    </>
 )
}