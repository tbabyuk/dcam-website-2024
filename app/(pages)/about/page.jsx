import { PageTitle } from "../page-content-components/PageTitle";


export const metadata = {
    title: "About Us | Da Capo Academy of Music",
    description: "The story of how we got started",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "About Us | Da Capo Academy of Music",
        description: "The story of how we got started",
        url: "https://dacapomusic.ca/about",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const AboutPage = () => {
    
    return (
            <main className="about-page bg-gray-100 pb-36">
                    <PageTitle title="About Us" image="/images/pages/about/about_page_illustration.png" />

                    <section className="content flex flex-col leading-7 px-5 lg:px-36 xl:px-52 py-20">
                        <div className="mb-12">
                            <p><strong>Da Capo Academy of Music (DCAM)</strong> began as an at-home piano studio and opened its doors at Humbertown Shopping Centre in September 2018. Our name comes from the Italian musical term “Da Capo”, which means “from the beginning” and is a common term found in sheet music. At DCAM, we offer private music lessons to students of all ages and skill levels and also prepare students for RCM (Royal Conservatory of Music) exams, recitals, auditions, and competitions. To showcase their progress, students have an opportunity to participate in one or both of our bi-annual music recitals. We are passionate about music and love to pass this passion on to our students! Whether you are a parent wanting to start your child on a musical path or an adult who has finally decided seriously start learning a music instrument - we welcome you at our school!</p>
                        </div>
                        <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly">
                            <div className="flex justify-center items-center h-[300px]">
                                <img src="/images/pages/about/recital_1_2024.jpg" alt="Winter 2023 Recital - Group 1" className="max-h-full rounded-lg" />
                            </div>
                            <div className="flex justify-center items-center h-[300px]">
                                <img src="/images/pages/about/recital_2_2024.jpg" alt="Winter 2023 Recital - Group 2" className="max-h-full rounded-lg" />
                            </div>
                        </div>
                    </section>
            </main>
     );
}
 
export default AboutPage;