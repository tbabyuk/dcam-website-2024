"use client"

import styles from "./Slider.module.css"
import { useState, useEffect } from "react"
// import { MainSliderOverlay } from "./MainSliderOverlay"
// import { ShopSliderOverlay } from "./ShopSliderOverlay"

const sliderImagesArray = ["/images/slider-images/piano_1200.jpg", "/images/slider-images/guitar_1200.jpg", "/images/slider-images/voice_1200_2.jpg", "/images/slider-images/drums_1200.jpg"]



export const Slider = () => {


  const [sliderIndex, setSliderIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex === sliderImagesArray.length - 1 ? 0 : prevIndex + 1));    
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="h-[calc(100vh-235px)] sm:h-[calc(100vh-200px)] md:h-[calc(100vh-133px)] max-h-[600px] relative">
        {/* <ShopSliderOverlay />
        <MainSliderOverlay /> */}

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