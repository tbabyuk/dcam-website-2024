import { PageTitle } from "../../page-content-components/PageTitle";
import { PageSubtitle } from "../../page-content-components/PageSubtitle";
import { LessonTeachersSection } from "../../page-content-components/LessonTeachersSection";
import { teachersArray } from "@/app/data/teachersData";
import { PageBottomRegisterButton } from "../../page-content-components/PageBottomRegisterButton";


export const metadata = {
    title: "Toddler Music Classes in Etobicoke | Da Capo Academy of Music",
    description: "Aimed at children aged 2-5, our Toddler Music Program introduces rhythm and melody in a fun and interactive environment. Classes are designed to enhance early childhood development through engaging musical activities!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Toddler Music Classes in Etobicoke | Da Capo Academy of Music",
        description: "Aimed at children aged 2-5, our Toddler Music Program introduces rhythm and melody in a fun and interactive environment. Classes are designed to enhance early childhood development through engaging musical activities!",
        url: "https://dacapomusic.ca/toddler-music-classes",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "website",
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


const ToddlerMusicPage = () => {

    return ( 
        <main className="instrument-page">
            <PageTitle title="Toddler Music Classes" image="/images/pages/toddlers/toddler_music_classes_illustration.png" alt="toddler music classes illustration" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row md:items-center mb-6 md:mb-0">
                    <p>Our “Musical Beginnings” program is a group class aimed at toddlers and preschoolers (ages 2-5). It is designed to introduce young children to music and help them develop an understanding of rhythm, pitch and musicality at an early age. This class is a great gateway into starting to learn an instrument later down the road. Join us and give your child a head start on their musical journey!</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/images/pages/toddlers/toddler_lessons.jpg" alt="toddler music lesson in progress" className="rounded-md mx-auto w-[180px]" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Why start early?" />
                <p>Early childhood is a critical time for cognitive, social, and emotional development. Music can play a significant role in enhancing these areas.<br /><br />Our program focuses on:
                    <ul className="list-disc list-inside">
                        <li><span className="font-semibold">Cognitive Development</span>: Engaging with music helps toddlers develop better memory, attention, and problem-solving skills.</li>
                        <li><span className="font-semibold">Social Skills</span>: Group activities encourage interaction, sharing, and cooperation with peers.</li>
                        <li><span className="font-semibold">Emotional Growth</span>: Music is a wonderful way for toddlers to express themselves and explore their emotions.</li>
                    </ul>
                </p>
            </section>

            <section className="format leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Program Format" />
                <p>In our fun and interactive classes, children will engage in singing, movement, and playing simple instruments such as egg shakers, tambourines, and xylophones. These activities are not only enjoyable but also support cognitive and social development. With guidance from our experienced instructor, children will explore the basics of music in a playful and supportive environment.</p>
            </section>

            <section className="duration leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>“Musical Beginnings” classes last for 30 minutes.</p>
            </section>

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/images/pages/toddlers/toddler_instruments.png" alt="a girl doing music theory" className="rounded-md mx-auto w-[140px]" />
                    </figure>
                    <p>The most common instruments in our toddler classes are egg shakers, tambourines, and xylophones. The instruments are provided by us, but families are free to bring their own similar instruments from home if they wish.</p>
                </div>
            </section>

            <section className="duration leading-8 px-5 lg:px-36 xl:px-52 py-16">
                <PageSubtitle subtitle="Pricing" />
                <p>The program includes weekly 30-minute classes at a cost of $20.00/class. Families of current students receive a 10% discount off this rate. Tuition must be paid a month in advance, on the 1st of each month. Your fee will be pro-rated if you start in the middle of a month. Families who do not wish to commit to monthly lessons can choose to do drop-in classes instead, at a fee of $25.00/class (paid before the start of each class). No discounts can be applied to drop-in classes.</p>
            </section>

            <LessonTeachersSection 
                custom="With over a decade of experience working with youngsters, Lauren is passionate about introducing toddlers to the enchanting world of music. Her warm, encouraging approach creates a supportive and fun learning environment where little ones can explore their musicality. Lauren's own musical journey began as a toddler through music lessons based on the Orff Method, igniting a lifelong love for the arts. Her passion for performance and music continued through competitive highland dancing as well as voice training in musical theatre style under Gerald Issac. As a member of various choral ensembles during her university years, she has continued to develop her musical talents while working toward her Bachelor of Arts degree at the University of Toronto. Lauren's next goal is to obtain a degree in Education to become an Elementary School Teacher." 
                teachers={teachersArray.filter(teacher => teacher.instrument.includes("toddlers"))}
            />

            <PageBottomRegisterButton />
        </main>
     );
}
 
export default ToddlerMusicPage;