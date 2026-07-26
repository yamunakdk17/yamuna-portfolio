const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "https://your-portfolio-domain.vercel.app", // replace with your real frontend URL
        ],
        credentials: true,
    })
);

// Routes
app.use("/api/contact", contactRoutes);

module.exports = app;