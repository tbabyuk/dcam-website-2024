




export const TeacherCard = ({teacher}) => {

    return (
        <div className="w-[230px] h-auto rounded-lg shadow-md overflow-hidden">
            <div className="w-[230px] h-[270px]">
                <img 
                    src={teacher.photo}
                    width={200}
                    height={300}
                    alt={teacher.alt}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="text-dcam-black bg-gradient-to-r from-gray-50 to-gray-200 text-center p-3">
                <h3 className="font-bold text-[1.3rem] pb-2">{teacher.name}</h3>
                <p className="text-[0.9rem]">{teacher.instrument}</p>
            </div>
        </div>
    )
}