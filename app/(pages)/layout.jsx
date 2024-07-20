
export const metadata = {
    title: "RCM Wizard | Da Capo Academy of Music",
    description: "RCM Piano Exam Requirements Summary - All Levels",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "RCM Wizard | Da Capo Academy of Music",
        description: "RCM Piano Exam Requirements Summary - All Levels",
        url: "https://www.dacapomusic.ca/tools/rcm-wizard",
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


export default function PagesLayout({ children }) {
    return (
        <main className="bg-white">
            {children}
        </main>
    )
  }