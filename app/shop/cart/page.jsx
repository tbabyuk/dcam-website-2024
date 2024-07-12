"use client"

import { useState } from "react"
import { useShopContext } from "@/app/hooks/useShopContext"
import { CartProductRow } from "./components/CardProductRow"
import ReCAPTCHA from "react-google-recaptcha"


const Cart = () => {

  const {cart} = useShopContext();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(null)


  // GET SUBTOTAL OF ALL CART ITEMS
    const getSubtotal = () => {
      const subtotal = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      return subtotal.toFixed(2)
    }

    const handleRecaptchaChange = (value) => {
      // This function is called when the user completes the reCAPTCHA challenge
      console.log("handleRecaptcha change fired")
      setRecaptchaValue(value);
    };


    // WORKING CODE, RUN AFTER SUCCESSFUL RECATCHA VALIDATION
    const handleCheckout = async () => {

      console.log("handleCheckout fired")
      
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // body: JSON.stringify({items: cart})
        body: JSON.stringify({
          items: cart
        })
      })
  
      if(res.ok) {
        const {url} = await res.json()
        window.location.assign(url)
      } else {
        setProcessing(false)
        setError("Oops, something went wrong. Try again later.")
      }
    }


    const handleSubmitAndValidate = async (e) => {

    e.preventDefault()
    console.log("sending these items to backend...", cart)

    setError("")
    setProcessing(true)

    // Check if reCAPTCHA is verified before submitting the form
    
    if (recaptchaValue) {

      try {
        const res = await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            payload: recaptchaValue
          })
        })

        const data = await res.json()

        console.log("logging x from handleSubmitAndValidate:", data)

        if(!data.success) {
          throw new Error(data["error-codes"])
        } else {
          console.log("verification successful")
          handleCheckout()
        }

      } catch(error) {
         console.log("an error occured while verifying reCAPTCHA:", error.message)
         setError("Sorry, we could not verify your checkmark. Please contact us via email at info@dacapomusic.ca if you are having trouble with your purchase.")
      } finally {
        setProcessing(false)
      }

    } else {
      setError("Please check the box above before proceeding")
      setProcessing(false)
    }

}


  return (
        <div className="books-list px-5 lg:px-36 bg-gray-100 py-20 overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-center bg-gray-200 border-2 border-gray-200">
                        <td>Remove</td>
                        <td>Item</td>
                        <td>About</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <CartProductRow key={product.id} product={product} />
                    ))}
                    <tr>
                        <td colSpan="4"></td>
                        <td className="text-right font-semibold">Subtotal:</td>
                        <td className="text-center font-semibold py-4">${getSubtotal()}</td>
                    </tr>
                    <tr>
                        <td colSpan="4"></td>
                        <td colSpan="2" className="text-right text-sm italic">Tax and Shipping calculated at Checkout</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex flex-col items-end">
              <form onSubmit={handleSubmitAndValidate}>
                <ReCAPTCHA sitekey="6LdFCTwoAAAAAJz1TIkSuEFdE1AKYDoFa0S7Hcmm" onChange={handleRecaptchaChange} className="mt-4" />
                <div className="text-red-500 mt-2 text-[0.9rem] h-[1rem]">{error && error}</div>
                <button className="bg-green-500 hover:bg-green-600 mt-4 text-gray-50 py-3 px-5 rounded me-[3px]" disabled={processing}>{processing ? "Processing..." : "Checkout"}</button>
              </form>
            </div>
        </div>
  )
}


export default Cart;