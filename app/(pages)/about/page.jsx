import { PageTitle } from "../page-content-components/PageTitle";
import { aboutPagePhotosArray } from "./aboutData";

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
        type: "website",
        images: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/og_images%2Fog_dcam_main.jpg?alt=media&token=e8c883a8-0e34-4076-a51f-6735e6dab683",
                width: 1200,
                height: 630
            }
        ]
    },
}


const AboutPage = () => {
    
    return (
            <>
                <PageTitle title="About Us" heatherImage="/images/pages/about/about_page_illustration.png" alt="about page illustration" />

                <section className="content flex flex-col leading-7 px-5 lg:px-36 pt-20 pb-32">
                    <div className="mb-12">
                        <p><strong>Da Capo Academy of Music (DCAM)</strong> began as an at-home piano studio and opened its doors at Humbertown Shopping Centre in September 2018. Our name comes from the Italian musical term “Da Capo”, which means “from the beginning” and is a common term found in sheet music. At DCAM, we offer private music lessons to students of all ages and skill levels and also prepare students for RCM (Royal Conservatory of Music) exams, recitals, auditions, and competitions. To showcase their progress, students have an opportunity to participate in one or both of our bi-annual music recitals. We are passionate about music and love to pass this passion on to our students! Whether you are a parent wanting to start your child on a musical path or an adult who has finally decided seriously start learning a music instrument - we welcome you at our school!</p>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                        {aboutPagePhotosArray.map((photo) => (
                            <div className="flex flex-grow items-center h-[250px]">
                                <img 
                                    src={photo.source}
                                    alt={photo.alt}
                                    className="h-full w-full rounded-lg object-cover object-center hover:scale-125" 
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </>
     );
}
 
export default AboutPage;