"use client"

import { useState } from "react";
import { useEffect } from "react";


export const FreeTrialModal = ({freeTrialModalRef}) => {

    const initialTrialFormValues = {
        student: "",
        parent: "",
        instrument: "choose instrument",
        phone: "",
        email: "",
        source: "choose option"
    }

    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [trialFormFields, setTrialFormFields] = useState(initialTrialFormValues);
    const [isPending, setIsPending] = useState(false);


    const handleInput = (e) => {
        setTrialFormFields({...trialFormFields, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitting these fields:", trialFormFields)

        try {
            setIsPending(true);
            const res = await fetch("/api/submit-trial-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(trialFormFields)
            });

            if(!res.ok) {
                setIsPending(false);
                throw new Error("Network response is not ok");
            }

            const data = await res.json();
            console.log("success!", data);
            setIsPending(false);
            setIsFormSubmitted(true);

        } catch (error) {
            console.log(error.message)
        }

    }

    const handleSubmitAnother = () => {
        setIsFormSubmitted(false);
        setTrialFormFields(initialTrialFormValues)
    }


    useEffect(() => {
        const { student, parent, instrument, phone, email, source } = trialFormFields;
        const isValid =
            student &&
            parent &&
            instrument !== "choose instrument" &&
            phone &&
            email &&
            source !== "choose option";
        setIsFormValid(isValid);
    }, [trialFormFields])


    return (
        <dialog ref={freeTrialModalRef} className="modal">

            <div className="modal-box sm:max-w-[390px] max-h-[100vh]">
                {isFormSubmitted ? (
                    <>
                        <p className="text-dcam-reg-green text-[1.3rem]">Your form was successfully submitted! Please expect to hear from us within 1-2 business days to set up your trial lesson!</p>
                        <div className="flex justify-between mt-6">
                            <button className="btn btn-outline text-dcam-black" onClick={() => handleSubmitAnother(false)}>Submit another form</button>
                            <button className="btn btn-outline text-dcam-black" onClick={() => freeTrialModalRef.current.close()}>Close Modal</button>
                        </div>
                    </>
                ) : (
                <form className="flex flex-col w-full mx-auto text-dcam-black" onSubmit={handleSubmit}>
                    <h2 className="text-center font-bold text-xl text-dcam-reg-green mb-3">FREE TRIAL LESSON</h2>
                    {/* <p className="text-xs text-center mb-6">Get started with your free trial lesson today!</p> */}
                    <label className="mb-4">
                        <span className="block text-sm">Student Name:</span>
                        <input 
                            type="text" 
                            className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                            name="student"
                            value={trialFormFields.student}
                            onChange={handleInput}
                            autoFocus
                        />
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">Parent/Guardian Name:</span>
                        <input 
                            type="text" 
                            className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                            name="parent"
                            value={trialFormFields.parent}
                            onChange={handleInput}
                        />
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">Desired Instrument:</span>
                        <select 
                            className="w-full h-8 border-2 border-gray-300 text-sm"
                            name="instrument"
                            value={trialFormFields.instrument}
                            onChange={handleInput}
                        >
                            <option value="choose instrument">choose instrument</option>
                            <option value="piano">piano</option>
                            <option value="guitar">guitar</option>
                            <option value="bass guitar">bass guitar</option>
                            <option value="ukulele">ukulele</option>
                            <option value="drums">drums</option>
                            <option value="voice">voice</option>
                            <option value="theory">music theory</option>
                            <option value="theory">music for toddlers</option>
                            {/* <option value="theory">intro to music</option> */}
                        </select>
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">Phone:</span>
                        <input 
                            type="tel"
                            className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                            name="phone"
                            value={trialFormFields.phone}
                            onChange={handleInput}
                        />
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">Email:</span>
                        <input 
                            type="email"
                            className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                            name="email"
                            value={trialFormFields.email}
                            onChange={handleInput}
                        />
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">How did you hear about us?</span>
                        <select 
                            className="w-full h-8 border-2 border-gray-300 text-sm"
                            name="source"
                            value={trialFormFields.source}
                            onChange={handleInput}
                        >
                            <option value="choose option" disabled>choose option</option>
                            <option value="google">google search</option>
                            <option value="humbertown">humbertown sign</option>
                            <option value="humbertown">friend/relative</option>
                            <option value="social">social media (FB/IG)</option>
                            <option value="flyer">print flyer</option>
                            <option value="blog">blog article</option>
                            <option value="other">other</option>
                        </select>
                    </label>
                    {isPending ? (
                        <button className="btn dcam-submit-btn  w-full mt-3" disabled>
                            <span className="loading loading-spinner text-gray-400" />
                            Submitting, please wait...
                        </button>  
                    ) : (
                        <button className="btn dcam-submit-btn w-full mt-3" disabled={!isFormValid}>
                        Submit
                        </button> 
                    )} 
                </form>       
            )}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}