import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://route-orcin-three.vercel.app',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Email API is running...');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, mobile, purpose, location, pax, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  try {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Query from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Mobile: ${mobile}
Purpose: ${purpose}
Location: ${location}
PAX: ${pax}
Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
