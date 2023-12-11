import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
        user: "equiporojo250@gmail.com",
        pass: "mdko zlzl tmqo lwos"
    }
});

transporter.verify().then(() => {
    console.log("email enviado exitosamente");
});