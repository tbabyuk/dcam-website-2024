import { NextResponse } from "next/server";


export async function POST(request) {

    const {payload} = await request.json()

    console.log("recaptcha API route fired...............")


    try {
            const verificationResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
                method: "POST",
                headers: {"Content-Type": "application/x-www-form-urlencoded"
                },
                body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${payload}`
            })

            if(!verificationResponse.ok) {
                console.log("Failed to communicate with the reCAPTCHA server")
                throw new Error("Failed to communicate with the reCAPTCHA server (client error)")
            }

            const data = await verificationResponse.json();

            console.log("Logging verification response from Google:", data);
        
            return NextResponse.json(data)

        } catch (error) {
            return NextResponse.json({message: error.message})
        }

}