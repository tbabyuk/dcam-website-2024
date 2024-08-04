import { RegisterButton } from "./RegisterButton"

export const PageBottomRegisterButton = () => {

  return (
    <div className="flex flex-col border-t-2 border-t-gray-200 px-5 py-20 md:px-20 lg:px-36 xl:px-80">
        <div className="mb-5 text-center">
            <RegisterButton />
        </div>
        <p className="text-xs text-center">Just fill out our lesson registration form and wait to hear from us within 1-2 business days!</p>  
    </div>
    )
}