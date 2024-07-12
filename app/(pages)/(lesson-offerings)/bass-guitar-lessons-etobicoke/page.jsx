import { PageTitle } from "../../page-content-components/PageTitle";
import { PageSubtitle } from "../../page-content-components/PageSubtitle";
import { PageBottomTrialButton } from "../../page-content-components/PageBottomTrialButton";
import { LessonFormatSection } from "../../page-content-components/LessonFormatSection";
import { LessonDurationSection } from "../../page-content-components/LessonDurationSection";
import { LessonTeachersSection } from "../../page-content-components/LessonTeachersSection";
import { teachersArray } from "@/app/data/teachersData";


export const metadata = {
    title: "Bass Guitar Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for bass guitar lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY! (416) 237-9595",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Bass Guitar Lessons in Etobicoke | Da Capo Academy of Music",
        description: "Looking for bass guitar lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY! (416) 237-9595",
        url: "https://dacapomusic.ca/bass-guitar-lessons-etobicoke",
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


const BassGuitarLessonsPage = () => {

    return ( 
        <main className="bg-white">
            <PageTitle title="Bass Guitar Lessons" image="/images/pages/bass-guitar/bass_guitar_lessons_illustration.png" alt="bass guitar lessons illustration" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <p>The bass guitar is the heartbeat of any band, providing the groove that gets people moving and makes music come alive. Whether you dream of playing in a band, laying down cool basslines at a jam session, or simply enjoying the rich, deep sounds on your own, the bass guitar offers endless possibilities for creativity and fun!<br /><br />
                    At DCAM, we make learning the bass guitar an enjoyable and progressive experience. Our approach combines essential technique with songs and styles that resonate with you. Our instructors customize lessons to suit each individual's skill level and musical interests, ensuring a personalized and engaging learning journey.</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/images/pages/bass-guitar/bass_guitar_lessons.jpg" alt="guitar lesson in progress" style={{width: "190px"}} className="rounded-md mx-auto" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start bass guitar lessons?" />
                <p>We recommend starting bass guitar lessons at the age of six. At this age, most children have developed the physical ability to comfortably handle a small bass guitar and possess the finger strength needed to press down the strings. However, if your child is younger and you believe they are ready to start, we would be delighted to offer a free trial lesson and provide our professional recommendation.</p>
            </section>

            <LessonFormatSection />

            <LessonDurationSection />

            <section className="materials leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/images/pages/bass-guitar/bass_guitar_books.png" className="mx-auto" style={{width: "200px"}} alt="bass guitar books" />
                    </figure>
                    <p>Beginning students can start out with one of our beginner method books, which provide a solid foundation for new bass guitarists, covering essential skills such as reading tablature, understanding basic rhythms, and playing along with fun songs. After completing the series, students are encouraged to explore songs that interest them. They can also join our “Band Experience” program, where they can experience playing in a group setting with other instruments and musicians.</p>
                </div>
            </section>

            <section className="instruments leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="flex flex-col-reverse md:flex-row md:items-center mb-6">
                    <p>For young children, smaller-sized bass guitars with lighter gauge strings are recommended to reduce strain on the fingers. It's important to select a bass that fits the child's size and age, which can be bought or rented from most music stores or directly from us. Students are expected to have their own bass guitar and bring it with them to every lesson.<br /><br />
                    </p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/images/pages/bass-guitar/bass_guitar_instrument.jpg" alt="guitar lesson in progress" style={{width: "180px"}} className="rounded-md mx-auto" />
                    </figure>
                </div>
            </section>

            <section className="styles leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose to learn any musical style they want on the bass guitar, such as rock, jazz, funk, etc. Our teachers to their best to tailor lesson material to the student's interest.</p>
            </section>

            <LessonTeachersSection teachers={teachersArray.filter(teacher => teacher.instrument.includes("bass guitar"))} />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default BassGuitarLessonsPage;