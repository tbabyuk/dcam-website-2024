

export const TeacherProfile = ({teacher}) => {

    const {fullName, title, instrument, photo, bio} = teacher;
    const instrumentList = instrument.join(", ");

    return (
        <section className="px-5 lg:px-36 xl:px-52 py-24">
            <div className="flex-col leading-10">
                <div className="mb-5">
                    <h2 className="font-ovo text-dcam-reg-orange text-3xl font-semibold text-center pb-3">{fullName}</h2>
                    {title && <h4 className="font-ovo text-dcam-reg-orange text-xl font-semibold text-center pb-3">{title}</h4>}
                    <h4 className="font-ovo text-xl font-semibold text-center pt-3 pb-8 border-t-2 border-t-gray-300">Teacher: <span className=" font-light">{instrumentList}</span></h4>
                </div>
                <div className="flex flex-col md:flex-row">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0 mx-auto">
                        <img src={photo} className="rounded-xl shadow-lg" style={{width: "200px"}} alt={`photo of ${fullName}`} />
                    </figure>
                    <div className="hyphens-auto">
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}