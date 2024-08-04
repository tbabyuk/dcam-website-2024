import { PageSubtitle } from "./PageSubtitle"
import Link from "next/link"
import { TeacherCard } from "../(home)/components/TeacherCard"


export const LessonTeachersSection = ({background, bio, teachers}) => {

  return (
        <section className={`teachers leading-8 px-5 lg:px-36 xl:px-52 py-16 ${background ? background : ""}`}>
            <PageSubtitle subtitle="Teachers" />
            {bio ? (
                <p>{bio}</p>
                ) : (
                    <p>Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link href="/teachers" className="dcam-link">Teachers Section</Link>.</p>
                )
            }
            <div className="flex flex-wrap gap-7 justify-center mt-10">
                {teachers && teachers.map((teacher, index) => (
                    <TeacherCard key={index} teacher={teacher} />
                ))}
            </div>
        </section>
    )
}