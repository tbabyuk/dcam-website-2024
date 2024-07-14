import { ArticleTitle } from "../../components/ArticleTitle"
import { ArticleSource } from "../../components/ArticleSource"
import { ArticleSectionHeading } from "../../components/ArticleSectionHeading"
import { ArticleHeading } from "../../components/ArticleHeading"
import { ArticleSubheadingRed } from "../../components/ArticleSubheadingRed"
import { PageBottomTrialButton } from "@/app/(pages)/page-content-components/PageBottomTrialButton"
import { ArticleDivider } from "../../components/ArticleDivider"
import { ArticleImage } from "../../components/ArticleImage"
import { ArticleSectionDivider } from "../../components/ArticleSectionDivider"


export const metadata = {
    title: "RCM Guitar Exam Requirements (all grades) | Da Capo Academy of Music",
    description: "Planning to do your RCM guitar exams? Find out what you need to know and exactly how you will be graded in our RCM guitar exam mark guide!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "RCM Guitar Exam Requirements (all grades) | Da Capo Academy of Music",
        description: "Planning to do your RCM guitar exams? Find out what you need to know and exactly how you will be graded in our RCM guitar exam mark guide!",
        url: "https://dacapomusic.ca/blog/rcm-guitar-exam-mark-guide",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2021-07-28T22:34:01+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Frcm_guitar_requirements_cover.jpg?alt=media&token=fbc771be-a559-4d96-94fc-51041d4e8358",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const ArticleRCMGuitarExamMarkGuide = () => {
    
    return (
        <main className="text-gray-600">
            <ArticleTitle title="RCM Guitar Exam Requirements (all grades)" date="July 28, 2021" />
            <ArticleImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Frcm_guitar_requirements_cover.jpg?alt=media&token=fbc771be-a559-4d96-94fc-51041d4e8358" alt="RCM Guitar Exam requirements cover photo" />

            <ArticleSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="mb-10">Planning to do your RCM guitar exam but not sure what exactly you will be graded on and how? You&apos;ve come to the right place! This guide will tell you what each section of the exam is worth to help you decide how to better allocate your prep time for optimal results! We created this RCM Guitar Exam Mark Guide with you - the student - in mind!</p>
                    <ArticleSource source="RCM Classical Guitar Syllabus, 2018" />
                </div>
            </section>

            <ArticleSectionDivider />

            <ArticleHeading heading="RCM GUITAR EXAM REQUIREMENTS FOR: ELEMENTARY LEVELS (Preparatory - Level 4)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Preparatory Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_prep_requirements.jpg?alt=media&token=d43bcf71-397b-4314-9f0a-34a8a0a71404" alt="mark breakdown for RCM Preparatory Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of technical tests and one etude. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 1 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_1_requirements.jpg?alt=media&token=e4f6fff6-efff-45cf-9822-59d5f07ffe36" alt="mark breakdown for RCM Level 1 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 1 etude. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 2 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_2_requirements.jpg?alt=media&token=e59a66fd-b2fd-428e-8279-cf2b541dd1a0" alt="mark breakdown for RCM Level 2 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. No memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 3 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_3_requirements.jpg?alt=media&token=e3c021f9-0469-4baa-9a20-86d09464e89c" alt="mark breakdown for RCM Level 3 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. No memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 4 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_4_requirements.jpg?alt=media&token=56c59f84-57f8-4ecb-9d37-67b29fb39d6e" alt="mark breakdown for RCM Level 4 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <ArticleDivider />

            <ArticleHeading heading="RCM GUITAR EXAM REQUIREMENTS FOR: INTERMEDIATE LEVELS (Level 5 - Level 8)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 5 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_5_requirements.jpg?alt=media&token=e5d55dde-8cb0-4e11-b078-0c000eff733b" alt="mark breakdown for RCM Level 5 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is &quot;Level 5 Theory&quot;.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 6 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_6_requirements.jpg?alt=media&token=b8f4fc62-7261-48aa-a10b-51ce946307c0" alt="mark breakdown for RCM Level 6 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write a co-requisite theory exam (&quot;Level 6 Theory&quot;) if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 7 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_7_requirements.jpg?alt=media&token=34f04003-fe97-43c6-add7-cb291a9072bb" alt="mark breakdown for RCM Level 7 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write the co-requisite &quot;Level 7 Theory&quot; exam if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 8 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_8_requirements.jpg?alt=media&token=7ab864ea-b951-4726-99c6-f5c12168f4aa" alt="mark breakdown for RCM Level 8 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write the co-requisite &quot;Level 8 Theory&quot; exam if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>


            <ArticleDivider />

            <ArticleHeading heading="RCM GUITAR EXAM REQUIREMENTS FOR: ADVANCED LEVELS (Level 9 - Level 10)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 9 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_9_requirements.jpg?alt=media&token=066e57fd-ccc7-4492-bde0-75c5578976b1" alt="mark breakdown for RCM Level 9 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write the co-requisite &quot;Level 8 Theory&quot;, &quot;Level 9 History&quot;, and &quot;Level 9 Harmony&quot; (or &quot;Keyboard Harmony&quot;) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <ArticleSubheadingRed subheading="Level 10 Guitar" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_10_requirements.jpg?alt=media&token=181779b5-8bf6-4a4e-9cb6-5e90e8051383" alt="mark breakdown for RCM Level 10 Guitar" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic mb-5">Students must also write the co-requisite &quot;Level 8 Theory&quot;, &quot;Level 9 History&quot;, &quot;Level 9 Harmony&quot; (or &quot;Keyboard Harmony&quot;), &quot;Level 10 History&quot;, and &quot;Level 10 Harmony & Counterpoint&quot; (or &quot;Keyboard Harmony&quot;) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>
            <PageBottomTrialButton />
        </main>
    )
}

export default ArticleRCMGuitarExamMarkGuide;