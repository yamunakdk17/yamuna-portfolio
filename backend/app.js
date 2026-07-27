const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://yamunakhadka.com.np",
            "https://www.yamunakhadka.com.np",
        ],
        credentials: true,
    })
);

app.use("/api/contact", contactRoutes);

module.exports = app;