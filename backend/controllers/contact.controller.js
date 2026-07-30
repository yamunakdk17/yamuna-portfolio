const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactMessage = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

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

                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error(error);

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }

        console.log("Email sent:", data);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully.",
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    sendContactMessage,
};