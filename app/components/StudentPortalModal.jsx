import { StudentPortalLoginForm } from "./StudentPortalLoginForm";


export const StudentPortalModal = ({studentPortalModalRef}) => {

    console.log("student portal modal fired")

    return (
        <dialog ref={studentPortalModalRef} className="modal">
            <div className="modal-box sm:max-w-[390px] max-h-[100vh]">
                <StudentPortalLoginForm />  
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}