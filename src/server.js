const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL, // Your Gmail
        pass: process.env.PASSWORD, // App Password (Enable Less Secure Apps or use OAuth)
    },
});

// API to handle file upload and send email
app.post("/send-email", upload.single("file"), async (req, res) => {
    try {
        const { email, subject, message } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: message,
            attachments: [
                {
                    filename: file.originalname,
                    path: file.path,
                },
            ],
        };

        await transporter.sendMail(mailOptions);
        fs.unlinkSync(file.path); // Delete file after sending
        res.status(200).json({ message: "Email sent successfully!" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
