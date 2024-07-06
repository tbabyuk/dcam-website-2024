import { teachersArray } from "@/app/data/teachers"
import { TeacherCard } from "../components/TeacherCard"
import { HomeSectionHeading } from "../components/HomeSectionHeading"
import { VisitPageBtn } from "../../components/VisitPageBtn"


export const HomeTeachersSection = () => {

    return (

        <section className="px-5 lg:px-36 py-20">
            <HomeSectionHeading title="OUR TEACHERS" textColor="text-dcam-reg-orange" />

            <div className="teachers-container flex flex-wrap gap-7 justify-center">
            {teachersArray.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
            ))}
            </div>
            <VisitPageBtn text="Visit Teachers Page" link="/teachers" />
            {/* <VisitPageButton text="Visit Teachers Page" link="/teachers" /> */}
        </section>
    )
}