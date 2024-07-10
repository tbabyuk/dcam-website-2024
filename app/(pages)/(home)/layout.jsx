import { Hero } from "./components/Hero"

export const metadata = {
    title: "Home | Da Capo Academy of Music",
    description: "Music lessons in Etobicoke",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Home | Da Capo Academy of Music",
        description: "Music lessons in Etobicoke",
        url: "https://dacapomusic.ca/",
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



const HomePageLayout = ({children}) => {

    return (
        <>
            <Hero />
            <main className="bg-white">
                {children}
            </main>
        </>
    )
}

export default HomePageLayout;