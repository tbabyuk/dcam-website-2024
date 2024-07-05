import { DownloadButton } from "@/app/components/DownloadButton";
import { PageDivider } from "@/app/components/PageDivider";
import { PageTitle } from "../page-content-components/PageTitle";


export const metadata = {
    title: "Rates | Da Capo Academy of Music",
    description: "Our term schedule and rates",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Rates | Da Capo Academy of Music",
        description: "Our term schedule and rates",
        url: "https://dacapomusic.ca/rates",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        images: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/page_images%2Frates-page.jpg?alt=media&token=1d31f193-d4c6-4a3c-9d8c-4e069583c859",
                width: 1200,
                height: 152
            }
        ]
    },
}


const RatesPage = () => {
    
    return (
            <main className="rates-page bg-white pb-36">
                <PageTitle title="Rates" heatherImage="/images/lesson-offerings/illustrations/rates-page-illustration.png" alt="rates page illustration" />
                
                <section className="rates-intro px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mb-24">
                    <p>
                        Lessons at Da Capo Academy of Music are based on the school system and are divided into Fall, Winter, Spring, and an optional Summer term. Your exact rates for each term will depend on which day of the week your lesson falls on, as some days are affected by statutory holidays or there are simply less of them in a given term.<br /><br />Please review below our policies surrounding lessons/payments and click the download button to view payment schedules for each term.<br /><br />*Students not wishing to follow the term system may opt to study on a Pay-As-You-Go basis. Rates for Pay-As-You-Go lessons are separate and can be viewed <a href="/downloads/PAYG_lessons_2023-2024.pdf" download className="dcam-link-orange">here</a>.<br /><br />*Lessons with our highest-qualified and most-experienced teachers are subject to our PREMIUM RATES, which you can find <a href="/downloads/premium_lessons_2023-2024.pdf" download className="dcam-link-orange">here</a>.
                    </p>
                </section>

                <section className="private-lesson-rates px-5 lg:px-36 xl:px-52">
                    <h2 className="font-ovo text-3xl text-dcam-reg-orange font-semibold text-center mb-14">PRIVATE LESSON RATES</h2>

                    <h4 className="font-ovo text-xl text-dcam-reg-orange text-center mb-6">2024 SUMMER TERM</h4>
                    <DownloadButton text="Download Payment Schedule" file="private_lessons_summer_2024.pdf" />

                    <h4 className="font-ovo text-xl text-dcam-reg-orange text-center mt-14 mb-6">2023-2024 ACADEMIC YEAR | Fall, Winter, Spring Terms</h4>
                    <DownloadButton text="Download Payment Schedule" file="private_lessons_2023-2024.pdf" />

                    <h4 className="font-ovo text-xl text-dcam-reg-orange font-semibold mt-16 mb-3">PRIVATE LESSONS (one-on-one):</h4>
                    <ul className="text-sm">
                        <li className="mb-2">* there is no sales tax on music lessons - rates are exactly as indicated</li>
                        <li className="mb-2">* payment for each term must be made in full before the first lesson of that term</li>
                        <li className="mb-2">* lessons may be discontinued with one week's notice. Refund will be provided minus $25 early withdrawal fee</li>
                        <li className="mb-2">* all lessons must be completed by the end of each term and cannot be carried over to the next term</li>
                        <li className="mb-2">* students are welcome to register for lessons mid-term, your lessons will simply be pro-rated to the end of ongoing term</li>
                        <li className="mb-2">* families with more than one child enrolled in private lessons qualify for our Family Discount</li>
                        <li className="mb-2">* a $20 registration fee applies to all new students or students who return to lessons after being inactive</li>
                    </ul>
                </section>
                <PageDivider />

                <section className="semi-private-lesson-rates px-5 lg:px-36 xl:px-52">
                    <h2 className="font-ovo text-3xl text-dcam-reg-orange font-semibold text-center mb-14">SEMI-PRIVATE LESSON RATES</h2>

                    <h4 className="font-ovo text-xl text-dcam-reg-orange text-center mb-6">2024 SUMMER TERM</h4>
                    <DownloadButton text="Download Payment Schedule" file="semi_private_lessons_summer_2024.pdf" />

                    <h4 className="font-ovo text-xl text-dcam-reg-orange text-center mt-14 mb-6">2023-2024 ACADEMIC YEAR | Fall, Winter, Spring Terms</h4>
                    <DownloadButton text="Download Payment Schedule" file="semi_private_lessons_2023-2024.pdf" />
                    
                    <h4 className="font-ovo text-xl text-dcam-reg-orange font-semibold mt-16 mb-3">SEMI-PRIVATE LESSONS (two students per teacher):</h4>
                    <ul className="text-sm">
                        <li className="mb-2">* There is no sales tax on music lessons - rates are exactly as indicated</li>
                        <li className="mb-2">* Payment for each term must be made in full before the first lesson of that term</li>
                        <li className="mb-2">* Lessons may be discontinued with one week's notice. Refund will be provided minus $25 early withdrawal fee</li>
                        <li className="mb-2">* All lessons must be completed by the end of each term and cannot be carried over to the next term</li>
                        <li className="mb-2">* Students are welcome to register for lessons mid-term, your lessons will simply be pro-rated to the end of ongoing term</li>
                        <li className="mb-2">* Unlike for private lessons, the Family Member discount cannot be applied to Semi-Private Lessons</li>
                        <li className="mb-2">* A $20 registration fee applies to all new students or students who return to lessons after being inactive</li>
                    </ul>
                </section>
            </main>
     );
}
 
export default RatesPage;