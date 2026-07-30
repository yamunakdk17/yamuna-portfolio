require("dotenv").config();
const nodemailer = require("nodemailer");

async function test() {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("Verifying SMTP...");
        await transporter.verify();
        console.log("✅ SMTP Connected");

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "Test",
            text: "Hello",
        });

        console.log("✅ Email Sent");
    } catch (err) {
        console.error(err);
    }
}

test();