

export const FreeTrialModal = ({freeTrialModalRef}) => {

    return (
        <dialog ref={freeTrialModalRef} className="modal">
            <div className="modal-box sm:max-w-[400px] max-h-[100vh]">
                <form className="flex flex-col w-full mx-auto text-dcam-black" /*onSubmit={handleSubmit}*/>
                        <h2 className="text-center font-bold text-xl text-dcam-reg-green mb-3">FREE TRIAL LESSON</h2>
                        {/* <p className="text-xs text-center mb-6">Get started with your free trial lesson today!</p> */}
                        <label className="mb-4">
                            <span className="block text-sm">Student Name:</span>
                            <input 
                                type="text" 
                                className="w-full h-8 border-2 border-gray-300 ps-2 text-sm" 
                                // ref={studentNameRef}
                                autoFocus
                                required
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm">Parent/Guardian Name:</span>
                            <input 
                                type="text" 
                                className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                                // ref={parentNameRef}
                                required
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm">Desired Instrument:</span>
                            <select 
                                className="w-full h-8 border-2 border-gray-300 text-sm" 
                                // ref={instrumentRef} 
                                defaultValue="choose instrument" 
                                required
                            >
                                <option value="choose instrument" disabled>choose instrument</option>
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
                                // ref={phoneRef}
                                required
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm">Email:</span>
                            <input 
                                type="email"
                                className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                                // ref={emailRef}
                                required
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm">How did you hear about us?</span>
                            <select 
                                className="w-full h-8 border-2 border-gray-300 text-sm" 
                                // ref={sourceRef} 
                                defaultValue="choose option" 
                                required
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
                        <button className="btn dcam-submit-btn w-full mt-3" /*disabled={submitting}*/>Submit</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
            <button>close</button>
            </form>
        </dialog>
    )
}