import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



export const POST = async (req) => {

    const {student, parent, instrument, phone, email, source} = await req.json();

    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "info@dacapomusic.ca",
            pass: process.env.NODEMAILER_INFO_PASS
        }
    })

    const emailOptions =
        {
            from: "info@dacapomusic.ca",
            to: "info@dacapomusic.ca",
            subject: "New Trial Lesson Submission",
            html: `
                    <strong>Student Name</strong><br />
                    <small>${student}</small>
                    <hr>
                    <strong>Parent/Guardian Name</strong><br />
                    <small>${parent}</small>
                    <hr>
                    <strong>Instrument</strong><br />
                    <small>${instrument}</small>
                    <hr>
                    <strong>Phone</strong><br />
                    <small>${phone}</small>
                    <hr>
                    <strong>Email</strong><br />
                    <small>${email}</small>
                    <hr>
                    <strong>How did you hear about us?</strong><br />
                    <small>${source}</small>
                    <hr>
            `
        }

        try {
            // throw new Error("Ooops, error with trial form!!!! OOPS")
            await transporter.sendMail(emailOptions);
            console.log("try block fired in Node.js")
            return NextResponse.json({message: "trial notification email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("an error occurred while sending trial email:", error.message)
            return NextResponse.json({message: error.message}, {status: 500})
        }

}
