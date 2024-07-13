import Link from "next/link";
import { TeacherProfile } from "../page-content-components/TeacherProfile";
import { teachersArray } from "@/app/data/teachersData";
import { PageTitle } from "../page-content-components/PageTitle";


export const metadata = {
    title: "Teachers | Da Capo Academy of Music",
    description: "Our teachers",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Teachers | Da Capo Academy of Music",
        description: "Our teachers",
        url: "https://dacapomusic.ca/teachers",
        // metadataBase: new URL("https://dacapomusic.ca/"),
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        // images: [
        //     {
        //     //   url: "https://dcam-assets.static.domains/teachers-page-illustration.png",
        //       url: "https://dcam-assets.static.domains/teachers-page-illustration.png",
        //       width: 542,
        //       height: 1024,
        //     }
        //   ],
    },
}


const TeachersPage = () => {

    return ( 
        <main className="teachers-page bg-white pb-36">
            <PageTitle title="Teachers" heatherImage="/images/pages/teachers/teachers_page_illustration.png" alt="teachers page illustration" />

            <div className="teachers">
                {teachersArray.map((teacher, index) => (
                    <TeacherProfile key={index} teacher={teacher} />
                ))}
            </div>

            <div className="px-5 lg:px-36 xl:px-52">
                <p className="italic"><span className="font-bold">*</span> Lessons with these teachers are subject to our <Link href="/rates" target="_blank" className="dcam-link">premium rates</Link></p>
            </div>
        </main>
     );
}
 
export default TeachersPage;