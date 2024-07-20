import { Hero } from "./components/Hero"

export const metadata = {
    title: "Home | Da Capo Academy of Music",
    description: "Music lessons in Etobicoke",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Home | Da Capo Academy of Music",
        description: "Music lessons in Etobicoke - piano, guitar, bass guitar, ukulele, drums, voice, music theory, band classes, toddler music classes",
        url: "https://dacapomusic.ca/",
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



const HomePageLayout = ({children}) => {

    return (
        <>
            <Hero />
            <div className="bg-white">
                {children}
            </div>
        </>
    )
}

export default HomePageLayout;