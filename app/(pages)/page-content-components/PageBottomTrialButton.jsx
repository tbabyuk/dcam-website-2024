import { TrialButton } from "./TrialButton"


export const PageBottomTrialButton = () => {
  return (
    <div className="flex flex-col border-t-2 border-t-gray-200 px-5 py-20 md:px-20 lg:px-36 xl:px-80">
        <div className="mb-5 text-center">
            <TrialButton />
        </div>
        <p className="text-xs text-center">Just fill out our quick trial lesson form and wait to hear from us within 1-2 business days. If you like your trial lesson, you can sign up for regular lessons with us! Our lessons are available online (Zoom or Skype) as well as in-person if you live close to our location. Start learning your favorite instrument with one of our amazing teachers today!</p>  
    </div>
    )
}