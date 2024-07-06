import Image from "next/image"



export const HomeAboutSection = () => {
  return (
        <section className="intro leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 text-white bg-dcam-light-blue py-20 relative">
            <img src="images/pages/home/notes_light.svg" className="absolute left-6 top-6 w-[110px]" />
            <img src="images/pages/home/notes_light.svg" className="absolute right-8 bottom-8 w-[110px]" />
            <div className="flex flex-col md:flex-row">
                <figure className="flex-shrink-0 mb-8 sm:me-8 float-left">
                    <Image src="images/pages/home/piano_lesson.png" alt="lesson in progress" className="mx-auto" width="230" height="230"  unoptimized />
                </figure>
                <p className="hyphens-auto">Located in the beautiful Etobicoke neighbourhood of Humber Valley Village since 2018, Da Capo Academy of Music (DCAM) offers music lessons to students of all ages and skill levels. Our amazing team of teachers are passionate musicians who love to share their passion with their students. Have an instrument you are keen on learning? Great! Fill out our "Free Trial Lesson" form and come in for a free, no-obligation trial lesson!<br /><br />
                Please explore our website to learn more about us. If you have a question, call us during our business hours or send us an email at <a href = "mailto: info@dacapomusic.ca" className="dcam-link">info@dacapomusic.ca</a> and we will get back to you as possible!</p>
            </div>
        </section>  
  )
}