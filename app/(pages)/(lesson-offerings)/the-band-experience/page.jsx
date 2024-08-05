import { PageTitle } from "../../page-content-components/PageTitle";
import { PageSubtitle } from "../../page-content-components/PageSubtitle";
import { PageBottomRegisterButton } from "../../page-content-components/PageBottomRegisterButton";
import { LessonTeachersSection } from "../../page-content-components/LessonTeachersSection";


export const metadata = {
    title: "Band Classes in Etobicoke | Da Capo Academy of Music",
    description: "Join our 'Band Experience' program and learn what it's like to be part of a band. Practice, perform, and develop your musical skills in a fun and collaborative environment!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Band Classes in Etobicoke | Da Capo Academy of Music",
        description: "Join our 'Band Experience' program and learn what it's like to be part of a band. Practice, perform, and develop your musical skills in a fun and collaborative environment!",
        url: "https://dacapomusic.ca/the-band-experience",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        // publishedTime: "2020-07-27T22:12:00+00:00",
        // images: [    
        //     {
        //         url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-waltzes%2Feasy_chopin_waltzes_cover.jpg?alt=media&token=b08eb378-7fc7-440c-95ac-199b39f5f89f",
        //         width: 1200,
        //         height: 628,
        //         type: "image/jpeg"
        //     }
        // ],
    },
}


const TheBandExperiencePage = () => {
    
    return ( 
        <main className="instrument-page">
            <PageTitle title="The Band Experience" image="/images/pages/band/the_band_experience_illustration.png" alt="band classes illustration" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0">
                    <p>Our &quot;Band Experience&quot; program is designed for students who want to experience what it&apos;s like to be part of a band. Students get an opportunity to practice and perform together, developing essential skills such as teamwork, timing, and stage presence. Through collaborative rehearsals and live performances during our music recitals, students gain valuable experience and a deeper understanding of playing music in a group setting. This program is an excellent way for budding musicians to build confidence, enhance their musical abilities, and enjoy the thrill of performing as a cohesive unit.</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/images/pages/band/the_band_experience_main.jpg" alt="toddler music lesson in progress" className="rounded-md mx-auto w-[180px]" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle='When is the right time to join "The Band Experience"?' />
                <p>Students are expected to have played their instrument for at least six months before joining &quot;The Band Experience&quot;. The program is not intended to be a replacement for private lessons, as the focus will be on the band working as a unit and not on each individual instrument. For this reason, students are expected to have a basic grasp for their instrument before joining. Bands will be formed based on the students&apos; age and experience level and we do our best to place you in an appropriate group.</p>
            </section>

            <section className="format leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Program Format" />
                <p>Rehearsals take place once a week and last for 45 minutes. Each rehearsal is led by either one or two band leaders (our teachers). The goal of each practice is to work on a small repertoire of songs that the band could perform for an audience either on the DCAM stage or at one of our recitals. The band can only make progress if all of its members show up to rehearsals, so regular attendance is strongly encouraged. Except for extenuating circumstances, band members who miss three consecutive rehearsals may not be able to continue in the program. The program runs in six-months sessions which culminate in a performance, so we encourage students to be ready to commit to six months of rehearsals. After the final performance, students can choose to continue on to the next session or take time off.</p>
            </section>

            <section className="duration leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>Most band rehearsals last for 45 minutes.</p>
            </section>

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/images/pages/band/band_instruments.png" alt="a girl doing music theory" className="rounded-md mx-auto w-[160px]" />
                    </figure>
                    <p>Band members will be provided with sheet music and notes for the songs they are working on and are expected to bring their music with them for each rehearsal. Students who play hand-held instruments are required to bring their own instruments to every practice. For large instruments like drums and keyboard, students can use school instruments.</p>
                </div>
            </section>

            <section className="duration leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Pricing" />
                <p>The program includes weekly 45-minute band rehearsals at a cost of $25.00/class. Current students who are also taking private lessons at DCAM get a 10% discount on &quot;The Band Experience&quot; program. Tuition must be paid a month in advance, on the 1st of each month.</p>
            </section>

            <LessonTeachersSection />

            <PageBottomRegisterButton />
        </main>
     );
}
 
export default TheBandExperiencePage;