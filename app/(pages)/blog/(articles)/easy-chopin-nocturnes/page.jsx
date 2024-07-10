import { ArticleTitle } from "../../components/ArticleTitle"
import { ArticleSectionHeading } from "../../components/ArticleSectionHeading"
import { ArticleHeading } from "../../components/ArticleHeading"
import { PageBottomTrialButton } from "@/app/(pages)/page-content-components/PageBottomTrialButton"
import { ArticleDivider } from "../../components/ArticleDivider"
import { ArticleImage } from "../../components/ArticleImage"
import { ArticleSectionDivider } from "../../components/ArticleSectionDivider"


export const metadata = {
    title: "The 3 Easiest Chopin Nocturnes (piano) | Da Capo Academy of Music",
    description: "Looking to learn a beautiful Chopin nocturne that doesn't require advanced mastery of the piano? These 3 are a great place to start!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "The 3 Easiest Chopin Nocturnes (piano) | Da Capo Academy of Music",
        description: "Looking to learn a beautiful Chopin nocturne that doesn't require advanced mastery of the piano? These 3 are a great place to start!",
        url: "https://dacapomusic.ca/blog/easy-chopin-nocturnes",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2022-10-23T03:50:14+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-nocturnes%2Feasy_chopin_nocturnes_cover.jpg?alt=media&token=0a02a5af-6cc0-4b2f-b304-6fcf75de2454",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const ArticleEasyChopinNocturnes = () => {

    return (
        <main className="text-gray-600">
            <ArticleTitle title="The 3 Easiest Chopin Nocturnes (piano)" date="October 22, 2022" />
            <ArticleImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-nocturnes%2Feasy_chopin_nocturnes_cover.jpg?alt=media&token=0a02a5af-6cc0-4b2f-b304-6fcf75de2454" alt="Easy Chopin Nocturnes cover"/>

            <ArticleSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="leading-8">Chopin is known to have written a total of 21 nocturnes, 18 of which were published during his lifetime and 3 posthumously. Today, his nocturnes are held in very high regard among musicians and continue to enjoy widespread popularity in contemporary concert repertoire.</p><br />

                    <p className="leading-8">Keep in mind that the word “easy” is used here relative to Chopin's other nocturnes, and does not mean that these works are easy to play. To be able to perform these pieces comfortably, one must be at a minimum an intermediate to high-intermediate pianist.</p><br />

                    <p className="leading-8">*The pieces are not ranked in any particular order.</p>
                </div>
            </section>

            <ArticleSectionDivider />

            <ArticleHeading heading="#1. Nocturne in C Minor, P. 2 No. 8" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8 mb-12">
                    <p>Although composed in 1837, this nocturne was not published until 1938, long after Chopin's death. It is known for its relative simplicity and a beautiful, folk-like melody in the right hand.</p>
                </div>
                <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                    <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                    <ul className="list-disc list-inside leading-6">
                        <li className="font-light"><span className="font-medium">Composed</span>: 1837</li>
                        <li className="font-light"><span className="font-medium">Pages</span>: 3</li>
                        <li className="font-light"><span className="font-medium">Key</span>: C Minor</li>
                        <li className="font-light"><span className="font-medium">Tempo</span>: Andante sostenuto (slow and sustained)</li>
                        <li className="font-light"><span className="font-medium">Ability Level</span>: High intermediate</li>
                        <li className="font-light"><span className="font-medium">My personal rating</span>: 3.5/5 (nice!)</li>
                    </ul>
                </div>
                <div className="mb-14">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/vcUwESz8Lic"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="leading-8 mb-10 ">
                    <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                    <ul className="list-disc list-inside">
                        <li>The slow overall tempo and a predictable LH pattern of eighth notes.</li>
                    </ul>
                </div>
                <div className="leading-8">
                    <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                    <ul className="list-disc list-inside">
                        <li>12- and sometimes 14- note runs in RH will require a light touch and good finger control.</li>
                    </ul>
                </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="#2. Nocturne in C Sharp Minor, P. 1, No. 16 ('Reminiscence')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8 mb-12">
                    <p>As was the case with our first nocturne, this one was also published posthumously, in 1870. Chopin had dedicated this composition to his older sister, Ludwika Chopin. These days, many people know this piece from the soundtrack to Roman Polanski's 2002 film “The Pianist”.</p>
                </div>
                <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                    <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                    <ul className="list-disc list-inside leading-6">
                        <li className="font-light"><span className="font-medium">Composed</span>: 1830</li>
                        <li className="font-light"><span className="font-medium">Pages</span>: 3</li>
                        <li className="font-light"><span className="font-medium">Key</span>: C Sharp Minor</li>
                        <li className="font-light"><span className="font-medium">Tempo</span>: Lento con grad espressione (slow with great expression)</li>
                        <li className="font-light"><span className="font-medium">Ability Level</span>: High Intermediate</li>
                        <li className="font-light"><span className="font-medium">My personal rating</span>: 5/5 (love it!)</li>
                    </ul>
                </div>
                <div className="mb-14">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/vcUwESz8Lic"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="leading-8 mb-10 ">
                    <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">The slow overall tempo and a predictable LH pattern of eighth notes.</li>
                    </ul>
                </div>
                <div className="leading-8">
                    <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">18- and 35-note runs towards the end of the piece will require lightness of touch and good finger control.</li>
                    </ul>
                </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="#3. Nocturne in G Minor, Op. 37, No. 1" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="leading-8 mb-12">
                    <p>Published in 1840, this was one of a set of two nocturnes that Chopin wrote while staying in Majorca with George Sand.</p>
                </div>
                <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-dcam-reg-orange text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                    <h3 className="text-2xl text-center mb-3 bg-dcam-dark-orange rounded">Quick Facts</h3>
                    <ul className="list-disc list-inside leading-6">
                        <li className="font-light"><span className="font-medium">Composed</span>: 1838</li>
                        <li className="font-light"><span className="font-medium">Pages</span>: 3</li>
                        <li className="font-light"><span className="font-medium">Key</span>: G Minor</li>
                        <li className="font-light"><span className="font-medium">Tempo</span>: Andante sostenuto (slow and sustained)</li>
                        <li className="font-light"><span className="font-medium">Ability Level</span>: High Intermediate</li>
                        <li className="font-light"><span className="font-medium">My personal rating</span>: 4/5 (very nice!)</li>
                    </ul>
                </div>
                <div className="mb-14">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/uiDtZHdwIpc"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="leading-8 mb-10 ">
                    <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">The slow overall tempo, predictable LH eighth-note pattern, key signature, repeated (ABA) structure.</li>
                    </ul>
                </div>
                <div className="leading-8">
                    <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-4">Multi-note runs and grace notes in RH will require lightness of touch and good finger control.</li>
                    </ul>
                </div>
            </section>
            <PageBottomTrialButton />
        </main>
    )
}

export default ArticleEasyChopinNocturnes;