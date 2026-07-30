

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// const sendContactMessage = async (req, res) => {
//     try {
//         console.log("========== REQUEST ==========");
//         console.log(req.body);

//         console.log("1. Verifying SMTP...");
//         await transporter.verify();
//         console.log("2. SMTP VERIFIED");

//         console.log("3. Sending email...");

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             subject: "Portfolio Test",
//             text: "Testing from controller",
//         });

//         console.log("4. EMAIL SENT");

//         return res.json({
//             success: true,
//             message: "Success",
//         });
//     } catch (err) {
//         console.error("ERROR:");
//         console.error(err);

//         return res.status(500).json({
//             success: false,
//             message: err.message,
//         });
//     }
// };

// module.exports = { sendContactMessage };


const nodemailer = require("nodemailer");
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    family: 4,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

const sendContactMessage = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        console.log("========== REQUEST ==========");
        console.log(req.body);

        console.log("Sending email...");

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact from ${name}`,
            html: `
                <h2>New Portfolio Contact</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        console.log("Email sent successfully.");

        return res.status(200).json({
            success: true,
            message: "Message sent successfully.",
        });
    } catch (error) {
        console.error("EMAIL ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    sendContactMessage,
};