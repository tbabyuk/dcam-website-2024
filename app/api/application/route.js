import { NextResponse } from 'next/server'
import nodemailer from "nodemailer"


export async function POST(request) {

    const { 
            applicationFormFields,
            resumeName,
            resumeURL
            } = await request.json()


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
            subject: "New Teacher Application",
            html: `
                <strong>Applicant Name</strong><br />
                <small>${applicationFormFields.fullName}</small>
                <hr>
                <strong>Phone</strong><br />
                <small>${applicationFormFields.phone}</small>
                <hr>
                <strong>Email</strong><br />
                <small>${applicationFormFields.email}</small>
                <hr>
                <strong>Instrument</strong><br />
                <small>Piano:${applicationFormFields.instruments.piano}</small><br />
                <small>Guitar:${applicationFormFields.instruments.guitar}</small><br />
                <small>Bass guitar:${applicationFormFields.instruments.bass}</small><br />
                <small>Drums:${applicationFormFields.instruments.drums}</small><br />
                <small>Vocals:${applicationFormFields.instruments.vocals}</small><br />
                <small>Toddlers:${applicationFormFields.instruments.toddlers}</small>
                <hr>
                <strong>Type of work</strong><br />
                <small>Permanent:${applicationFormFields.typeOfWork.permanent}</small><br />
                <small>Substitute:${applicationFormFields.typeOfWork.substitute}</small>
                <hr>
                <strong>Experience</strong><br />
                <small>${applicationFormFields.teachingExperience}</small>
                <hr>
                <strong>Source</strong><br />
                <small>${applicationFormFields.source}</small>
                <hr>
                <strong>Comments</strong><br />
                <small>${applicationFormFields.comments}</small>
                <hr>
            `,
            attachments: [{
                filename: resumeName,
                href: resumeURL
            }]
        }

        
        try {
            await transporter.sendMail(emailOptions);
            console.log("try block fired in Node.js")
            return NextResponse.json({message: "application notice email sent successfully"}, {status: 200})
        } catch (error) {
            console.log("catch block fired in Node.js")
            return NextResponse.json({message: error.message}, {status: 500})
        }

}