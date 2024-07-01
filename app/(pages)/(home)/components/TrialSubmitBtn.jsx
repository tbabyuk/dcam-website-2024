
'use client'
 
import { useFormStatus } from 'react-dom'
 
export const TrialSubmitBtn = () => {
  const { pending } = useFormStatus()
 
  return (
    <button className="btn dcam-submit-btn w-full mt-3" disabled={pending}>
        Submit
    </button>
  )
}