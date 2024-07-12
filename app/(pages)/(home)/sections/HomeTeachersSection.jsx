import { teachersArray } from "@/app/data/teachersData"
import { TeacherCard } from "../components/TeacherCard"
import { HomeSectionHeading } from "../components/HomeSectionHeading"
import { VisitPageBtn } from "../../components/VisitPageBtn"


export const HomeTeachersSection = () => {

    const featuredTeachersArray = teachersArray.filter(teacher => teacher.featured);

    return (
        <section className="px-5 lg:px-36 py-20">
            <HomeSectionHeading title="OUR TEACHERS" textColor="text-dcam-reg-orange" />

            <div className="teachers-container flex flex-wrap gap-7 justify-center">
            {featuredTeachersArray.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
            ))}
            </div>
            <VisitPageBtn text="Visit Teachers Page" link="/teachers" />
        </section>
    )
}