"use client"

// import Typewriter from "typewriter-effect"
// import { RegisterButtonHero } from "./RegisterButtonHero"
// import { TrialButtonHero } from "./TrialButtonHero"

import { useState, useRef } from "react";
import { IoMusicalNotes } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa";
import { FreeTrialModal } from "./FreeTrialModal";
import { memo } from "react";

export const MainSliderOverlay = memo(() => {

  const freeTrialModalRef = useRef();

  return (
        <div className="absolute top-0 right-0 py-6 text-[1.5rem] text-gray-100 h-full w-full md:w-8/12 lg:w-6/12 px-5 flex flex-col justify-evenly z-[2]" style={{backgroundImage: "linear-gradient(to right, rgba(16, 55, 86, 0), rgba(16, 55, 86, 0.8), rgba(16, 55, 86, 1)" }}>
            <div className="flex flex-col justify-center items-center sm:flex-row px-8 gap-5 xl:px-20 mb-4">
                <button className="btn btn-wide slider-btn" onClick={() => freeTrialModalRef.current.showModal()}><IoMusicalNotes size="1.1rem" />Book a Free Trial</button>
                <button className="btn btn-wide slider-btn"><FaFileSignature size="1.1rem" />Register for Lessons</button>
            </div>
            <h1 className="text-5xl xl:text-6xl text-center lg:px-22 xl:px-32">Discover the Joy of Music!</h1>
            <h2 className="font-roboto text-xl hidden md:block py-4 roboto px-6 xl:mx-16 text-center leading-9">In-person (and online!) music lessons for children and adults in the Etobicoke neighbourhood of Humber Valley Village!</h2>
            <h2 className="text-2xl md:hidden py-4 roboto px-6 xl:mx-16 text-center">Music Lessons in Etobicoke!</h2>
            {/* <div className="text-center sm:hidden"> */}
            {/* <Typewriter 
              options={{
                strings: ["PIANO", "GUITAR", "BASS GUITAR", "VOICE", "DRUMS", "UKULELE", "MUSIC THEORY"],
                autoStart: true,
                loop: true,
              }}
            /> */}
            {/* </div> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <FreeTrialModal freeTrialModalRef={freeTrialModalRef}  /> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <FreeTrialModal freeTrialModalRef={freeTrialModalRef} />
        </div>  
    )
})