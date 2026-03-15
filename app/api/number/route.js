import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true dla portu 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  const body = await request.json();
  const { phone } = body;

  if (!phone) {
    return NextResponse.json({ error: "Brak wymaganych pól" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Formularz leasing-premium" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      subject: `🔔 Klient pozostawił kontakt – ${phone}`,
      html: `
        <h2>Nowe zapytanie o kontakt</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd"><b>Telefon</b></td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><b>Data</b></td><td style="padding:8px;border:1px solid #ddd">${new Date().toLocaleString("pl-PL")}</td></tr>
        </table>
      `,
    });


    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Błąd nodemailer:", error);
    return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 });
  }
}