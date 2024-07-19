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
            <ul className="flex items-center h-full">
                <li className="h-full w-full">
                    <Link href="/" className="nav-link hover:bg-dcam-dark-blue">Home</Link>
                </li>
                <li className="h-full w-full relative">
                    <div className="nav-link cursor-pointer" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>Lessons <IoIosArrowDown className="ms-1" /></div>
                    {lessonsSubmenuIsOpen && (
                        <ul className="w-[200px] absolute z-20" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)}>
                            <li className="h-full w-full">
                                <Link href="/piano-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Piano Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/guitar-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Guitar Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/bass-guitar-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Bass Guitar Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/drum-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Drum Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/voice-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Voice Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/music-theory-lessons-etobicoke" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Music Theory Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/toddler-music-classes" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    Toddler Music Classes
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/the-band-experience" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setLessonsSubmenuIsOpen(false)}>
                                    The Band Experience
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
                    <div className="nav-link cursor-pointer" onMouseEnter={() => setToolsSubmenuIsOpen(true)} onMouseLeave={() => setToolsSubmenuIsOpen(false)}>Tools <IoIosArrowDown className="ms-1" /></div>
                    {toolsSubmenuIsOpen && (
                        <ul className="w-[200px] bg-red-400 absolute z-20" onMouseEnter={() => setToolsSubmenuIsOpen(true)} onMouseLeave={() => setToolsSubmenuIsOpen(false)}>
                            <li className="h-full w-full">
                                <Link href="/tools/rcm-wizard" className="nav-link hover:bg-dcam-dark-blue" onClick={() => setToolsSubmenuIsOpen(false)}>
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

        {/* MOBILE MENU */}
        <div className="md:hidden bg-dcam-reg-blue h-[55px] relative z-20">
            <RxHamburgerMenu className="absolute left-2 h-full text-dcam-white hover:cursor-pointer" size="2rem" onClick={handleDrawerToggle} />
            {isDrawerOpen && (
                <ul className="absolute left-0 -bottom-[55px] flex flex-col w-full h-[55px]">
                    <li className="h-full w-full">
                        <Link href="/" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>Home</Link>
                    </li>
                    <li className="h-full w-full">
                        <div className={`mobile-nav-link cursor-pointer ${lessonsSubmenuIsOpen && "border-none"}`} onClick={() => setLessonsSubmenuIsOpen(!lessonsSubmenuIsOpen)}>Lessons <IoIosArrowDown className="ms-1 mt-1" /></div>
                    </li>
                    {lessonsSubmenuIsOpen && (
                        <>
                            <li className="h-full w-full">
                                <Link href="/piano-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Piano Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/guitar-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Guitar Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/bass-guitar-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Bass Guitar Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/drum-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Drum Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/voice-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Voice Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/music-theory-lessons-etobicoke" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Music Theory Lessons
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/toddler-music-classes" className="mobile-nav-link border-none hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    Toddler Music Classes
                                </Link>
                            </li>
                            <li className="h-full w-full">
                                <Link href="/the-band-experience" className="mobile-nav-link hover:bg-dcam-dark-blue" onMouseEnter={() => setLessonsSubmenuIsOpen(true)} onMouseLeave={() => setLessonsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                    The Band Experience
                                </Link>
                            </li>
                        </>
                    )}
                    <li className="h-full w-full">
                        <Link href="/rates" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>Rates</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/teachers" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>Teachers</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/reviews" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>Reviews</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/about" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>About</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/contact" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>Contact</Link>
                    </li>
                    <li className="h-full w-full">
                        <Link href="/careers" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>Careers</Link>
                    </li>
                    <li className="h-full w-full">
                        <div className={`mobile-nav-link cursor-pointer ${toolsSubmenuIsOpen && "border-none"}`} onClick={() => setToolsSubmenuIsOpen(!toolsSubmenuIsOpen)}>Tools <IoIosArrowDown className="ms-1 mt-1" /></div>
                    </li>
                    {toolsSubmenuIsOpen && (
                        <li className="h-full w-full">
                            <Link href="/tools/rcm-wizard" className="mobile-nav-link hover:bg-dcam-dark-blue" onMouseEnter={() => setToolsSubmenuIsOpen(true)} onMouseLeave={() => setToolsSubmenuIsOpen(false)} onClick={() => setIsDrawerOpen(false)}>
                                RCM Wizard
                            </Link>
                        </li>
                    )}
                    <li className="h-full w-full">
                        <Link href="/shop" className="mobile-nav-link hover:bg-dcam-dark-blue" onClick={() => setIsDrawerOpen(false)}>
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