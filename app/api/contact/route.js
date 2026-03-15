import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: "serwer2619589.home.pl",
  port: Number(465),
  secure: true, // true dla portu 465
  auth: {
    user: "noreply@nexustudio.pl",
    pass: "RJ9_2qj"
  },
});

export async function POST(request) {
  const body = await request.json();
  const { name, phone, email } = body;

  if (!phone || !name) {
    return NextResponse.json({ error: "Brak wymaganych pól" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Formularz leasing-premium" <${process.env.SMTP_USER}>`,
      to: "kontakt@nexustudio.pl",
      subject: `🔔 Nowe zapytanie – ${name}`,
      html: `
        <h2>Nowe zapytanie z formularza</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd"><b>Imię</b></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><b>Telefon</b></td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><b>Email</b></td><td style="padding:8px;border:1px solid #ddd">${email || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd"><b>Data</b></td><td style="padding:8px;border:1px solid #ddd">${new Date().toLocaleString("pl-PL")}</td></tr>
        </table>
      `,
    });

    if (email) {
      await transporter.sendMail({
        from: `"leasing-premium.pl" <noreply@nexustudio.pl>`,
        to: email,
        subject: "Otrzymaliśmy Twoje zapytanie – leasing-premium.pl",
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#1a3a6b">Dziękujemy za kontakt, ${name}!</h2>
            <p>Twoje zapytanie zostało przyjęte.</p>
            <p>Nasz doradca skontaktuje się z Tobą <b>w ciągu 24 godzin</b> pod numer <b>${phone}</b>.</p>
            <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
            <p style="color:#888;font-size:13px">
              leasing-premium.pl | tel. 505-505-327 | biuro@leasing-premium.pl
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Błąd nodemailer:", error);
    return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 });
  }
}