import NodeMailer from "nodemailer";

export async function sendMail({
    to,
    subject,
    body,
}: {
    to: string,
    subject: string,
    body: string
}) {
    const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
    const transport = NodeMailer.createTransport({
        service: "fasthosts host name",
        auth: {
            user: SMTP_PASSWORD,
            pass: SMTP_EMAIL,
        }
    })
    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (err) {
        console.error("Error:", err);
        return;
    }

    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to: to,
            subject: subject,
            html: body,
        });
        console.log(sendResult);
    } catch (err) {
        console.error("Error:", err);
    }
}