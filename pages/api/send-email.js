const nodemailer = require('nodemailer')

export default async function handler(req, res) {
    const email = JSON.parse(req.body)

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        tls: false
    });

    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: process.env.EMAIL, // list of receivers
            subject: "Mensagem de portfólio", // Subject line
            text: email.body, // plain text body
        });
        res.status(200).json(info);
    } catch (error) {
        res.status(404).json({})
    }
}