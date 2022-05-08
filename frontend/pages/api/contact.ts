import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from 'next';

require('dotenv').config();

async function main(name: string, email: string, message: string, subject: string) {
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        host: 'smtp.gmail.com',
        auth: {
            user: "ykosiner@gmail.com",
            pass: process.env.GMAIL_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: "ykosiner@gmail.com",
        to: "yoni@kosiner.co.uk",
        subject: `Contact Form yonikosiner.com | ${subject}`,
        html: `${message} <br> <p>${name}'s email adress is <a href=mailto:${email}>${email}</a></p>`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message || !subject) {
        res.status(401).json({
            error: "Please provide all required fields"
        });
        return;
    };

    if (!email.includes("@")) {
        res.status(401).json({
            error: "Please provide a valid email address"
        });
        return;
    };

    if (message.length < 10) {
        res.status(401).json({
            error: "Please provide a message with at least 10 characters"
        });
        return;
    };

    if (subject.length < 5) {
        res.status(401).json({
            error: "Please provide a subject with at least 5 characters"
        });
        return;
    };

    if (name.length < 3) {
        res.status(401).json({
            error: "Please provide a name with at least 3 characters"
        });
        return;
    };

    if (name.length > 50) {
        res.status(401).json({
            error: "Please provide a name with less than 50 characters"
        });
        return;
    };

    if (subject.length > 50) {
        res.status(401).json({
            error: "Please provide a subject with less than 50 characters"
        });
        return;
    };

    if (message.length > 5000) {
        res.status(401).json({
            error: "Please provide a message with less than 5000 characters"
        });
        return;
    };

    if (email.length > 100) {
        res.status(401).json({
            error: "Please provide an email with less than 50 characters"
        });
        return;
    };

    if (email.length < 5) {
        res.status(401).json({
            error: "Please provide an email with at least 5 characters"
        });
        return;
    };

    main(name, email, message, subject).then((data) => {
        res.status(200).json({
            message: "Message sent successfully",
            data: data
        });
    }).catch((err) => {
        res.status(500).json({
            error: "Something went wrong",
            message: err
        });
    })
};
