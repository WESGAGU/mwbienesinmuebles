import * as brevo from "@getbrevo/brevo"

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

interface params {
    subject: string;
    to: {email: string; name: string;}[];
    htmlContent: string;
}


export async function sendEmail({subject, to, htmlContent }: params) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = subject;
    smtpEmail.to = to;
    smtpEmail.htmlContent = htmlContent;
    smtpEmail.sender = {name: "Wesling Garcia", email: "garcia2016weslin@gmail.com"};
    
    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.error(error);
  }
}
