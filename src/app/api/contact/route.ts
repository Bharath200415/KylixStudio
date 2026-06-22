import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      email,
      website,
      projectInfo,
      services,
      budget,
      timeline
    } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to:["bharath200415@gmail.com"],
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>

        <h3>Project Information</h3>
        <p>${projectInfo}</p>

        <h3>Services</h3>
        <p>${services.join(", ")}</p>

        <h3>Budget</h3>
        <p>${budget}</p>

        <h3>Launch Timeline</h3>
        <p>${timeline}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error },
      { status: 500 }
    );
  }
}