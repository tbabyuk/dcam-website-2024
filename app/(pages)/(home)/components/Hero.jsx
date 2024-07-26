"use client"

import styles from "./Slider.module.css"
import { useState, useEffect } from "react"
import { ShopSliderOverlay } from "./ShopSliderOverlay"
import { MainSliderOverlay } from "./MainSliderOverlay"


const sliderImagesArray = ["/images/slider/piano_1200.jpg", "/images/slider/guitar_1200.jpg", "/images/slider/voice_1200_2.jpg", "/images/slider/drums_1200.jpg"]



export const Hero = () => {


  const [sliderIndex, setSliderIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex === sliderImagesArray.length - 1 ? 0 : prevIndex + 1));    
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="h-[calc(100vh-227px)] sm:h-[calc(100vh-200px)] md:h-[calc(100vh-130px)] max-h-[600px] relative">
        <ShopSliderOverlay />
        <MainSliderOverlay />

        {sliderImagesArray.map((image, index) => (
          <img
            key={index} 
            src={image} 
            className={`${styles["slider-image"]} ${index === sliderIndex ? styles.active : ""} absolute h-full w-full object-cover`} 
            alt="slider image"
          />
        ))}

    </div>  
  )
}