const { Resend } = require("resend");

console.log("RESEND KEY EXISTS:", !!process.env.RESEND_API_KEY);
console.log("EMAIL USER:", process.env.EMAIL_USER);

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactMessage = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        console.log("Sending with Resend...");

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Portfolio Contact - ${name}`,
            html: `
                <h2>New Portfolio Contact</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        console.log("Resend response:", data);
        console.log("Resend error:", error);

        if (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(200).json({
            success: true,
            message: "Message sent successfully.",
        });

    } catch (err) {
        console.error("CATCH ERROR:", err);

        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = { sendContactMessage };