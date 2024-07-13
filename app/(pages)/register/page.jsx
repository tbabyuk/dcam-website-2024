import { RegisterForm } from "./RegisterForm";
import { PageTitle } from "../page-content-components/PageTitle";


export const metadata = {
    title: "Register | Da Capo Academy of Music...",
    description: "Register for lessons at Da Capo Academy of Music today!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        twitter: {
            card: "summary_large_image",
            images: ["https://i.postimg.cc/26ZMQ4Q0/Untitled-design-3.jpg"]
        },
        title: "Register | Da Capo Academy of Music...",
        description: "Register for regular lessons today!",
        url: "https://dacapomusic.ca/register",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        // images: [
        //     {
        //         url: "https://i.postimg.cc/26ZMQ4Q0/Untitled-design-3.jpg",
        //         width: 1200,
        //         height: 630
        //     }
        // ]
    },
}


const RegisterPage = () => {
    
    return (
        <>
            <PageTitle title="Register" image="/images/pages/register/register_page_illustration.png" alt="register page illustration" />

            <p className="leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-12">Register for lessons today! Just fill out the registration form below and we will be in touch with you within 1-2 business days about starting your lessons!</p>
            <section className="register-page px-5 lg:px-36 xl:px-52 pt-20 pb-32">
                <RegisterForm />
            </section>
        </>
    );
}
 
export default RegisterPage;