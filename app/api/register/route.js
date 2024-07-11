import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {

    const {
            student_name, 
            parent_name, 
            phone, 
            email, 
            instrument, 
            lesson_type, 
            lesson_duration, 
            lesson_frequency, 
            preferred_days, 
            source, 
            comments
            } = await request.json()


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            // user: "info@dacapomusic.ca",
            // pass: "kwrmhfzqejjsnmry"
            user: "terry@dacapomusic.ca",
            pass: "fbcaqouhkghjywtd"
        }
    })


    const emailOptions =
        {
            from: "terry@dacapomusic.ca",
            to: "terry@dacapomusic.ca",
            subject: "New Lesson Registration",
            html: `
                    <strong>Student Name</strong><br />
                    <small>${student_name}</small>
                    <hr>
                    <strong>Parent/Guardian Name</strong><br />
                    <small>${parent_name}</small>
                    <hr>
                    <strong>Phone</strong><br />
                    <small>${phone}</small>
                    <hr>
                    <strong>Email</strong><br />
                    <small>${email}</small>
                    <hr>
                    <strong>Instrument</strong><br />
                    <small>${instrument}</small>
                    <hr>
                    <strong>Lesson Type</strong><br />
                    <small>${lesson_type}</small>
                    <hr>
                    <strong>Lesson Duration</strong><br />
                    <small>${lesson_duration}</small>
                    <hr>
                    <strong>Lesson Frequency</strong><br />
                    <small>${lesson_frequency}</small>
                    <hr>
                    <strong>Lesson Days</strong><br />
                    <small>Mondays: ${preferred_days.monday}</small><br />
                    <small>Tuesdays: ${preferred_days.tuesday}</small><br />
                    <small>Wednesdays: ${preferred_days.wednesday}</small><br />
                    <small>Thursdays: ${preferred_days.thursday}</small><br />
                    <small>Saturdays: ${preferred_days.saturday}</small>
                    <hr>
                    <strong>Source</strong><br />
                    <small>${source}</small>
                    <hr>
                    <strong>Comments</strong><br />
                    <small>${comments}</small>
                    <hr>
                `
        }

        try {
            // throw new Error("Ooops, error with register form!!!! OOPS")
            await transporter.sendMail(emailOptions);
            console.log("try block fired in Node.js")
            return NextResponse.json({message: "new registration email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("error in catch black on server:", error.message)
            return NextResponse.json({message: error.message}, {status: 500})
        }

}