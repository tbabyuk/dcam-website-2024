"use client"

import { useEffect, useState } from "react"
import { storage } from "@/app/firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import { useValidateFormFields } from "@/app/hooks/useValidateFormFields";
// import { useValidateFormInputs } from "@/app/useValidateFormInputs";


export const TeacherApplicationForm = () => {

  const {
        fullNameIsValid,
        phoneIsValid, 
        emailIsValid, 
        instrumentsAreValid,
        typeOfWorkIsValid
        } = useValidateFormFields()

  const [firstPageLoad, setFirstPageLoad] = useState(false)

  const [applicationFormFields, setApplicationFormFields] = useState({
        fullName: "",
        phone: "",
        email: "",
        instruments: {
            "piano": false,
            "guitar": false,
            "bass": false,
            "drums": false,
            "vocals": false,
            "toddlers": false
        },
        typeOfWork: {
            "permanent": false,
            "substitute": false
        },
        teachingExperience: "choose option",
        source: "choose option",
        comments: "",
        resume: null
  })

  const [fullNameError, setFullNameError] = useState("")
  const [phoneError, setPhoneError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [instrumentsError, setInstrumentsError] = useState(null)
  const [typeOfWorkError, setTypeOfWorkError] = useState(null)
  const [teachingExperienceError, setTeachingExperienceError] = useState("")
  const [sourceError, setSourceError] = useState(null)
  const [resumeError, setResumeError] = useState(null)
  const [uploadError, setUploadError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitFail, setSubmitFail] = useState(false)


  // FORM INPUT HANDLERS
  const handleFullName = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        fullName: value
    }))
    if(!fullNameIsValid(value)) {
        setFullNameError("Full name must be between 6 and 40 characters long")
    } else {
        setFullNameError("")
    }
  }

  const handlePhone = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        phone: value
    }))
    if(!phoneIsValid(value)) {
        setPhoneError("Phone number can only contain numbers, '()' or '-' and be between 10 and 20 characters")
    } else {
        setPhoneError("")
    }
  }

  const handleEmail = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        email: value
    }))    
    if(!emailIsValid(value)) {
        setEmailError("Please enter a valid email address")
    } else {
        setEmailError("")
    }
  }

  const handleInstruments = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        instruments: {
            ...prev.instruments,
            [value]: !prev.instruments[value]
        }
    }))
  }

  const handleTypeOfWork = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        typeOfWork: {
            ...prev.typeOfWork,
            [value]: !prev.typeOfWork[value]
        }
    }))
  }

  const handleTeachingExperience = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        teachingExperience: value
    }))
    setTeachingExperienceError("")
  }

  const handleSource = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        source: value
    }))
    setSourceError("")
  }

  const handleComments = (value) => {
    setApplicationFormFields((prev) => ({
        ...prev,
        comments: value
    }))
  }


  const handleResumeUpload = (e) => {
    const allowedTypes = ["application/msword", "application/pdf"]
    const file = e.target.files[0]
    
    if(file && allowedTypes.includes(file.type)) {
        setApplicationFormFields((prev) => ({
            ...prev,
            resume: file
        }))
        setUploadError(null)
        setResumeError(null)
    } else {
        setResumeError(null)
        setApplicationFormFields.resume(null)
        console.log("that file type is not allowed")
        setUploadError("You can only upload Microsoft Word or PDF files")
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    let hasError = false;

    if(!applicationFormFields.fullName || !fullNameIsValid(applicationFormFields.fullName)) {
        setFullNameError("Please enter your full name")
        hasError = true;
    }
    if(!applicationFormFields.phone || !phoneIsValid(applicationFormFields.phone)) {
        setPhoneError("Please enter your phone number")
        hasError = true;
    }
    if(!applicationFormFields.email || !emailIsValid(applicationFormFields.email)) {
        setEmailError("Please enter your email address")
        hasError = true;
    }
    if(!instrumentsAreValid(applicationFormFields.instruments)) {
        setInstrumentsError("Please select which instrument(s) you can teach")
        hasError = true;
    } else {
        setInstrumentsError("")
    }
    if(!typeOfWorkIsValid(applicationFormFields.typeOfWork)) {
        setTypeOfWorkError("Please indicate what type of work you are interested in")
        hasError = true;
    } else {
        setTypeOfWorkError("")
    }
    if(applicationFormFields.teachingExperience === "choose option") {
        setTeachingExperienceError("Please indicate how much teaching experience you have")
        hasError = true;
    }
    if(applicationFormFields.source === "choose option") {
        setSourceError("Please indicate how you heard about us")
        hasError = true;
    }
    if(!applicationFormFields.resume) {
        setUploadError("")
        setResumeError("Please attach your resume")
        hasError = true;
    }

    if (hasError) {
        return
    }

    setSubmitting(true)


    const sendToServer = async (resumeName, resumeURL) => {


    try {
        const response = await fetch("/api/application", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                applicationFormFields,
                resumeName,
                resumeURL
            })
        })

        if(!response.ok) {
            const {message} = await response.json();
            throw new Error(message);
        }

        const responseData = await response.json()
        console.log("responseData from ok:", responseData.message)
        setSubmitSuccess(true)

        } catch (error) {
            console.log("An error occurred on client:", error.message)
            setSubmitFail(true)
        } finally {
            setSubmitting(false)
        }
    }  

    // upload resume to firebase storage and retrieve its meta data
    const resumeRef = ref(storage, `resumes/${uuidv4()}___${applicationFormFields.resume.name}`)

    try {
        const reference = await uploadBytes(resumeRef, applicationFormFields.resume)
        const resumeName = reference.metadata.name;
        const resumeURL = await getDownloadURL(resumeRef)
        sendToServer(resumeName, resumeURL)
    } catch (error) {
        console.log("oops, resume failed to upload", error)
    }
}

    useEffect(() => {
        setFirstPageLoad(true)
    }, [])

    useEffect(() => {
        if(!firstPageLoad) {
            return
        }
        const instrumentsValues = Object.values(applicationFormFields.instruments)
        if(!instrumentsValues.includes(true)) {
            setInstrumentsError("You must select at least one instrument that you can teach")
        } else {
            setInstrumentsError("")
        }
    }, [applicationFormFields.instruments])

    useEffect(() => {
        if(!firstPageLoad) {
            return
        }
        const typeOfWorkValues = Object.values(applicationFormFields.typeOfWork)
        if(!typeOfWorkValues.includes(true)) {
            setTypeOfWorkError("You must select at least one type of work")
        } else {
            setTypeOfWorkError(null)
        }
    }, [applicationFormFields.typeOfWork])



  return (
        <>
            {!submitSuccess && !submitFail && (
                <form className="w-full text-gray-600 sm:w-[80%] md:w-[500px] flex flex-col mx-auto" onSubmit={handleSubmit}>
                    <h2 className="text-center font-bold text-xl text-dcam-reg-green">TEACHER APPLICATION FORM</h2>
                    <p className="text-xs text-center mb-10">Start your teaching career with DCAM today!</p>

                    <label className="mb-1">
                        <span className="block text-sm">Full Name:</span>
                        <input 
                            type="text" 
                            className={`w-full h-8 border-2 ${fullNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`} 
                            onChange={(e) => handleFullName(e.target.value)}
                            value={applicationFormFields.fullName}
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{fullNameError && fullNameError}</span>
                    </label>

                    <label className="mb-1">
                        <span className="block text-sm">Phone:</span>
                        <input 
                            type="tel"
                            className={`w-full h-8 border-2 ${phoneError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                            onChange={(e) => handlePhone(e.target.value)}
                            value={applicationFormFields.phone}
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">Email:</span>
                        <input 
                            type="email"
                            className={`w-full h-8 border-2 ${emailError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                            onChange={(e) => handleEmail(e.target.value)}
                            value={applicationFormFields.email}
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>
                    </label>

                    <div className={`mb-1 border-2 ${instrumentsError ? "border-red-500" : "border-gray-200"} p-4`}>
                        <span className="block text-sm">INSTRUMENT:</span>
                        <span className="text-[0.8rem] font-semibold block mb-4">What instrument(s) do you specialize in that you would like to teach?</span>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="piano" 
                                value="piano" 
                                checked={applicationFormFields.instruments.piano} 
                                onChange={(e) => handleInstruments(e.target.value)} 
                                className="me-1" />Piano
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="guitar" 
                                value="guitar" 
                                checked={applicationFormFields.instruments.guitar} 
                                onChange={(e) => handleInstruments(e.target.value)} 
                                className="me-1" />Guitar
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="bass" 
                                value="bass" 
                                checked={applicationFormFields.instruments.bass} 
                                onChange={(e) => handleInstruments(e.target.value)} 
                                className="me-1" />Bass Guitar
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="drums" 
                                value="drums" 
                                checked={applicationFormFields.instruments.drums} 
                                onChange={(e) => handleInstruments(e.target.value)} 
                                className="me-1" />Drums
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="vocals" 
                                value="vocals" 
                                checked={applicationFormFields.instruments.vocals} 
                                onChange={(e) => handleInstruments(e.target.value)} 
                                className="me-1" />Vocals
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="toddlers" 
                                value="toddlers" 
                                checked={applicationFormFields.instruments.toddlers} 
                                onChange={(e) => handleInstruments(e.target.value)} 
                                className="me-1" />Music for Toddlers
                        </label>
                    </div>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{instrumentsError && instrumentsError}</span>

                    <div className={`mb-1 border-2 ${typeOfWorkError ? "border-red-600" : "border-gray-300"} p-4`}>
                        <span className="block text-sm">TYPE OF WORK:</span>
                        <span className="text-[0.8rem] font-semibold block mb-4">What kind of teaching position are you interested in at the moment?</span>

                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input type="checkbox" id="permanent" value="permanent" checked={applicationFormFields.typeOfWork.permanent} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Permanent (regular weekly lessons)
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input type="checkbox" id="substitute" value="substitute" checked={applicationFormFields.typeOfWork.substitute} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Substitute (we call you when we need you)
                        </label>
                    </div>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{typeOfWorkError && typeOfWorkError}</span>

                    <label className="mb-1">
                        <span className="block text-sm">How many years of teaching experience do you have:</span>
                        <select 
                            className={`w-full h-8 border-2 ${teachingExperienceError ? "border-red-500" : "border-gray-300"} text-sm`} 
                            value={applicationFormFields.teachingExperience} 
                            onChange={(e) => {handleTeachingExperience(e.target.value)}}>
                                <option value="choose option" disabled>choose option</option>
                                <option value="less than 1 year">&lt; 1 year</option>
                                <option value="1 to 2 years">1 - 2 years</option>
                                <option value="2 to 3 years">2 - 3 years</option>
                                <option value="more than 3 years">&gt; 3 years</option>
                        </select>
                        <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{teachingExperienceError && teachingExperienceError}</span>
                    </label>

                    <label className="mb-1">
                        <span className="block text-sm">How did you hear about us?</span>
                        <select className={`w-full h-8 border-2 ${sourceError ? "border-red-500" : "border-gray-300"} text-sm`} value={applicationFormFields.source} onChange={e => handleSource(e.target.value)} required>
                            <option value="choose option" disabled>choose option</option>
                            <option value="google">google search</option>
                            <option value="humbertown">humbertown sign</option>
                            <option value="friend/relative">friend/relative</option>
                            <option value="social">social media (FB/IG)</option>
                            <option value="flyer">print flyer</option>
                            <option value="blog">blog article</option>
                            <option value="blog">indeed.com</option>
                            <option value="other">other</option>
                        </select>
                        <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{sourceError && sourceError}</span>
                    </label>

                    <label className="mb-4">
                        <span className="block text-sm">Additional Information/Comments (optional):</span>
                        <textarea className={`w-full h-20 border-2 p-2 bg-gray-100 ${applicationFormFields.comments ? "border-green-500 outline-green-500" : "border-gray-300"}`} value={applicationFormFields.comments} onChange={e => handleComments(e.target.value)} />
                    </label>

                    <label className="mb-4">
                        <span className="block text-sm mb-4">Upload your resume:</span>
                        <input 
                            type="file" 
                            id="myFile" 
                            name="filename" 
                            className={`${applicationFormFields.resume && "border-2 border-green-500"} ${resumeError || uploadError ? "border-2 border-red-500" : ""} w-full`} 
                            onChange={handleResumeUpload} />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{resumeError && resumeError}{uploadError && uploadError}</span>
                    </label>
                    {/* <button className="dcam-button w-full mt-3 h-10" disabled={submitting}>{submitting ? "Submitting...This may take up to a minute, please wait..." : "Submit"}</button> */}
                    {submitting ? (
                            <button className="btn dcam-submit-btn w-full mt-3" disabled>
                                <span className="loading loading-spinner text-gray-400" />
                                Submitting, please wait...
                            </button>  
                        ) : (
                            <button className="btn dcam-submit-btn w-full mt-3">
                            Submit
                            </button> 
                    )}
                </form>

            )}

            {submitSuccess && (
                <div className="h-full text-green-600 px-5 self-center flex flex-col text-center">           
                        <p className="mb-6">Your application was successfully submitted and will be in our records - thank you!</p>
                </div>
            )}

            {submitFail && (
                <div className="h-full text-red-600 px-5 self-center flex flex-col text-center">           
                        <p className="mb-6">Sorry, there was a problem submitting your form. Please refresh and try again or send us a direct email at <span className="font-bold">info@dacapomusic.ca</span></p>
                </div>
            )}
        </>
    )
}
