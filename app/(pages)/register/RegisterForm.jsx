"use client"

import { useState, useEffect } from "react"
import { useValidateFormFields } from "@/app/hooks/useValidateFormFields"


export const RegisterForm = () => {


  const {
        studentNameIsValid, 
        parentNameIsValid, 
        phoneIsValid, 
        emailIsValid, 
        preferredDaysValid
        } = useValidateFormFields()

  const [firstPageLoad, setFirstPageLoad] = useState(false)
  const [studentNameError, setStudentNameError] = useState("")
  const [parentNameError, setParentNameError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [instrumentError, setInstrumentError] = useState("")
  const [preferredDaysError, setPreferredDaysError] = useState("")
  const [sourceError, setSourceError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitFail, setSubmitFail] = useState(false)


  const initialRegisterFormValues = {
        student_name: "",
        parent_name: "",
        phone: "",
        email: "",
        instrument: "choose instrument",
        lesson_type: "private",
        lesson_duration: "30",
        lesson_frequency: "once-a-week",
        preferred_days: {
            "monday": false,
            "tuesday": false,
            "wednesday": false,
            "thursday": false,
            "saturday": false
        },
        source: "choose option",
        comments: ""
  }

  const [registerFormFields, setRegisterFormFields] = useState(initialRegisterFormValues)

  // FORM INPUT HANDLERS
  const handleStudentName = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        student_name: value
    }))
    if(!studentNameIsValid(value)) {
        setStudentNameError("Student name must be between 3 and 40 characters long")
    } else {
        setStudentNameError("")
    }
  }

  const handleParentName = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        parent_name: value
    }))
    if(!parentNameIsValid(value)) {
        setParentNameError("Parent name must be between 3 and 40 characters long")
    } else {
        setParentNameError("")
    }
  }

  const handlePhone = (value) => {
    setRegisterFormFields((prev) => ({
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
    setRegisterFormFields((prev) => ({
        ...prev,
        email: value
    }))
    if(!emailIsValid(value)) {
        setEmailError("Please enter a valid email address")
    } else {
        setEmailError("")
    }
  }

  const handleInstrument = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        instrument: value
    }))
    setInstrumentError("")
  }

  const handleLessonType = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        lesson_type: value
    }))
  }

  const handleLessonDuration = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        lesson_duration: value
    }))
  }

  const handleLessonFrequency = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        lesson_frequency: value
    }))
  }

  const handlePreferredDays = (value) => {
    setRegisterFormFields((prevState) => ({
        ...prevState,
        preferred_days: {
            ...prevState.preferred_days,
            [value]: !prevState.preferred_days[value]
        }
    }))
  }

  const handleSource = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        source: value
    }))
    setSourceError("")
  }

  const handleComments = (value) => {
    setRegisterFormFields((prev) => ({
        ...prev,
        comments: value
    }))
  }

  const handleSubmitAnother = () => {
    setSubmitSuccess(false)
    setFirstPageLoad(false)
    setRegisterFormFields(initialRegisterFormValues)
  }


  // FORM SUBMISSION LOGIC
  const handleSubmit = async (e) => {

    e.preventDefault()

    let hasError = false;

    if(!registerFormFields.student_name || !studentNameIsValid(registerFormFields.student_name)) {
        setStudentNameError("Please enter student name")
        hasError = true;
    }
    if(!registerFormFields.parent_name || !parentNameIsValid(registerFormFields.parent_name)) {
        setParentNameError("Please enter parent name")
        hasError = true;
    }
    if(!registerFormFields.phone || !phoneIsValid(registerFormFields.phone)) {
        setPhoneError("Please enter your phone number")
        hasError = true;
    }
    if(!registerFormFields.email || !emailIsValid(registerFormFields.email)) {
        setEmailError("Please enter your email address")
        hasError = true;
    }
    if(registerFormFields.instrument === "choose instrument") {
        setInstrumentError("Please indicate what instrument you would like to learn")
        hasError = true;
    }
    if(!preferredDaysValid(registerFormFields.preferred_days)) {
        setPreferredDaysError("You must select at least one day")
        hasError = true;
    } else {
        setPreferredDaysError("")
    }
    if(registerFormFields.source === "choose option") {
        setSourceError("Please indicate how you heard about us")
        hasError = true;
    }

    if (hasError) {
        return
    }

    try {
        setSubmitting(true)
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerFormFields)
        })

        if(!response.ok) {
            const {message} = await response.json();
            throw new Error(message);
        }
    
        const responseData = await response.json()
        console.log("responseData ok:", responseData.message)
        setSubmitSuccess(true)

        } catch(error) {
            console.log("An error occurred on client:", error.message)
            setSubmitFail(true)
        } finally {
            setSubmitting(false)
        }
}


  useEffect(() => {
    setFirstPageLoad(true)
  }, [])

  useEffect(() => {
    if(!firstPageLoad) {
        return
    }

    if(!preferredDaysValid(registerFormFields.preferred_days)) {
        setPreferredDaysError("Please indicate day(s) you would prefer for your lessons")
    } else {
        setPreferredDaysError(null)
    }
  }, [registerFormFields.preferred_days])


  return (
        <>
            {!submitSuccess && !submitFail && (
                <form className="w-full sm:w-[80%] md:w-[500px] flex flex-col mx-auto" onSubmit={handleSubmit}>
                    <h2 className="text-center font-bold text-xl text-dcam-reg-green">REGISTRATION FORM</h2>
                    <p className="text-xs text-center mb-10">Start your musical journey with DCAM today!</p>

                    <label className="mb-1">
                        <span className="block text-sm">Student Name:</span>
                        <input 
                            type="text" 
                            className={`w-full h-8 border-2 ${studentNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                            onChange={(e) => handleStudentName(e.target.value)}
                            name="student_name"
                            value={registerFormFields.student_name}
                            autoFocus
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{studentNameError && studentNameError}</span>
                    </label>
                    <label className="mb-1">
                        <span className="block text-sm">Parent/Guardian Name:</span>
                        <input 
                            type="text"
                            className={`w-full h-8 border-2 ${parentNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                            onChange={(e) => handleParentName(e.target.value)}
                            name="parent_name"
                            value={registerFormFields.parent_name}
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{parentNameError && parentNameError}</span>
                    </label>
                    <label className="mb-1">
                        <span className="block text-sm">Phone:</span>
                        <input 
                            type="tel"
                            className={`w-full h-8 border-2 ${phoneError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                            onChange={(e) => handlePhone(e.target.value)}
                            name="phone"
                            value={registerFormFields.phone}
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                    </label>
                    <label className="mb-1">
                        <span className="block text-sm">Email:</span>
                        <input 
                            type="email"
                            className={`w-full h-8 border-2 ${emailError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                            onChange={(e) => handleEmail(e.target.value)}
                            name="email"
                            value={registerFormFields.email}
                        />
                        <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>
                    </label>
                    <label className="mb-1">
                        <span className="block text-sm">Desired Instrument:</span>
                        <select 
                            className={`w-full h-8 border-2 ${instrumentError ? "border-red-500" : "border-gray-300"} text-sm`}
                            name="instrument"
                            value={registerFormFields.instrument} 
                            onChange={(e) => {handleInstrument(e.target.value)}}
                            >
                                <option value="choose instrument" disabled>choose instrument</option>
                                <option value="piano">piano</option>
                                <option value="guitar">guitar</option>
                                <option value="bass guitar">bass guitar</option>
                                <option value="ukulele">ukulele</option>
                                <option value="drums">drums</option>
                                <option value="voice">voice</option>
                                <option value="theory">music theory</option>
                                <option value="toddlers">music for toddlers</option>
                            {/* <option value="theory">intro to music</option> */}
                        </select>
                        <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{instrumentError && instrumentError}</span>
                    </label>
                    {/* LESSON TYPE: PRIVATE OR SEMI-PRIVATE */}
                    <div className="mb-6 border-2 border-gray-300 p-4">
                        <span className="block text-sm mb-4">LESSON TYPE:</span>
                        <div className="flex mb-4 text-[0.9rem]">
                            <label className="flex items-center me-10">
                                <input 
                                    type="radio" 
                                    name="lesson_type" 
                                    value="private" 
                                    checked={registerFormFields.lesson_type === "private"} 
                                    onChange={e => handleLessonType(e.target.value)} 
                                    className="me-1" />private
                            </label>
                            <label className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="lesson_type" 
                                    value="semi-private" 
                                    checked={registerFormFields.lesson_type === "semi-private"} 
                                    onChange={e => handleLessonType(e.target.value)} 
                                    className="me-1" />semi-private
                            </label>
                        </div>
                        <span className="text-[0.8rem] font-semibold">*Note that semi-private lessons require two students to register</span>
                    </div>

                    <div className="mb-6 border-2 border-gray-300 p-4">
                        <span className="block text-sm mb-4">LESSON DURATION:</span>
                        <div className="flex mb-4 text-[0.9rem]">
                            <label className="flex items-center me-10">
                                <input 
                                    type="radio" 
                                    name="lesson_duration" 
                                    value="30" 
                                    checked={registerFormFields.lesson_duration === "30"} 
                                    onChange={e => handleLessonDuration(e.target.value)} 
                                    className="me-1" />30 mins
                            </label>
                            <label className="flex items-center me-10">
                                <input 
                                    type="radio" 
                                    name="lesson_duration" 
                                    value="45" 
                                    checked={registerFormFields.lesson_duration === "45"} 
                                    onChange={e => handleLessonDuration(e.target.value)} 
                                    className="me-1" />45 mins
                            </label>
                            <label className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="lesson_duration" 
                                    value="60" 
                                    checked={registerFormFields.lesson_duration === "60"} 
                                    onChange={e => handleLessonDuration(e.target.value)} 
                                    className="me-1" />60 mins
                            </label>
                        </div>
                        <span className="text-[0.8rem] font-semibold">*Minimum duration of 45 mins is recommended for students 12+ or students working on Royal Conservatory Level 1 and above</span>
                    </div>

                    <div className="mb-6 border-2 border-gray-300 p-4">
                        <span className="block text-sm mb-4">LESSON FREQUENCY:</span>
                        <div className="flex text-[0.9rem]">
                            <label className="flex items-center me-10">
                                <input 
                                    type="radio" 
                                    name="lesson_frequency" 
                                    value="once-a-week" 
                                    checked={registerFormFields.lesson_frequency === "once-a-week"} 
                                    onChange={e => handleLessonFrequency(e.target.value)} 
                                    className="me-1" />once a week
                            </label>
                            <label className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="lesson_frequency" 
                                    value="twice-a-week" 
                                    checked={registerFormFields.lesson_frequency === "twice-a-week"} 
                                    onChange={e => handleLessonFrequency(e.target.value)} 
                                    className="me-1" />twice a week
                            </label>
                        </div>
                    </div>
                    <div className={`mb-1 border-2 ${preferredDaysError ? "border-red-500" : "border-gray-200"} p-4`}>
                        <span className="block text-sm">PREFERRED DAY(S):</span>
                        <span className="text-[0.8rem] font-semibold block mb-4">Please choose as many options as possible</span>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="monday"
                                name="preferred_days"
                                value="monday" 
                                checked={registerFormFields.preferred_days.monday} 
                                onChange={(e) => handlePreferredDays(e.target.value)}
                                className="me-1" />Monday
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="tuesday"
                                name="preferred_days"
                                value="tuesday" 
                                checked={registerFormFields.preferred_days.tuesday} 
                                onChange={(e) => handlePreferredDays(e.target.value)}
                                className="me-1" />Tuesday
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="wednesday"
                                name="preferred_days" 
                                value="wednesday" 
                                checked={registerFormFields.preferred_days.wednesday} 
                                onChange={(e) => handlePreferredDays(e.target.value)} 
                                className="me-1" />Wednesday
                        </label>
                        <label className="flex items-center text-[0.9rem] mb-4">
                            <input 
                                type="checkbox" 
                                id="thursday"
                                name="preferred_days" 
                                value="thursday" 
                                checked={registerFormFields.preferred_days.thursday}
                                onChange={(e) => handlePreferredDays(e.target.value)} 
                                className="me-1" />Thursday
                        </label>
                        <label className="flex items-center text-[0.9rem]">
                            <input 
                                type="checkbox" 
                                id="saturday"
                                name="preferred_days" 
                                value="saturday" 
                                checked={registerFormFields.preferred_days.saturday} 
                                onChange={(e) => handlePreferredDays(e.target.value)} 
                                className="me-1" />Saturday
                        </label>
                    </div>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{preferredDaysError && preferredDaysError}</span>

                    <label className="mb-1">
                        <span className="block text-sm">How did you hear about us?</span>
                        <select 
                            className={`w-full h-8 border-2 ${sourceError ? "border-red-500" : "border-gray-300"} text-sm`} 
                            name="source"
                            value={registerFormFields.source}
                            onChange={e => handleSource(e.target.value)} 
                            >
                                <option value="choose option" disabled>choose option</option>
                                <option value="google">google search</option>
                                <option value="humbertown">humbertown sign</option>
                                <option value="friend/relative">friend/relative</option>
                                <option value="social">social media (FB/IG)</option>
                                <option value="flyer">print flyer</option>
                                <option value="blog">blog article</option>
                                <option value="other">other</option>
                        </select>
                        <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{sourceError && sourceError}</span>
                    </label>
                    <label className="mb-4">
                        <span className="block text-sm">Additional Information/Comments (optional):</span>
                        <textarea 
                            className={`w-full h-20 border-2 p-2 bg-gray-100 ${registerFormFields.comments ? "border-green-500 outline-green-500" : "border-gray-300"}`}
                            name="comments"
                            value={registerFormFields.comments} 
                            onChange={e => handleComments(e.target.value)}
                        />
                    </label>
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
                        <p className="mb-6">Your form was successfully submitted - thank you!</p>
                        <p className="mb-6">Please expect to hear back from us within 1-2 business days!</p><br />
                        <button className="btn w-[200px] mx-auto btn-outline text-dcam-black" onClick={handleSubmitAnother}>Submit another form</button>
                </div>
            )}

            {submitFail && (
                <div className="h-full text-red-500 px-5 self-center flex flex-col text-center">           
                        <p className="mb-6">Sorry, there was a problem submitting your form. Please refresh and try again or send us a direct email at <span className="font-bold">info@dacapomusic.ca</span></p>
                </div>
            )}
        </>
    )
}
