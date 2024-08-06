import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io", // Replace with your SMTP server
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "api",
        pass: "208559722b6c11458cb19b806f5a929c",
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"Website Contact" <website@eventsbyrie.com>`,
        to: "eventsbyrie@gmail.com", // Replace with your default recipient
        subject: `New message from ${name}`,
        text: message,
        html: `<p><strong>From:</strong> ${name} (${email})</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
