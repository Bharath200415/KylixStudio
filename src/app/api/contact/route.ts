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

    const result= await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [email],
    subject: "We've received your enquiry",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2>Thanks for reaching out to Kylix Studio 🚀</h2>

        <p>Hi ${name},</p>

        <p>
          We've successfully received your enquiry and our team
          will review it shortly.
        </p>

        <p>
          We typically respond within 24 hours.
        </p>

        <hr />

        <h3>Your Submission</h3>

        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>

        <br/>

        <p>
          Looking forward to working with you!
        </p>

        <p>
          Team Kylix Studio
        </p>
      </div>
    `,
  });
  console.log(result);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error },
      { status: 500 }
    );
  }
}