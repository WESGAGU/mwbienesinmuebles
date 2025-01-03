"use server";
import { sendEmail } from "@/lib/brevo";
import { redirect } from "next/navigation";

export async function handleForm(formData: FormData) {
  const title = formData.get("title");
  const to_name = formData.get("to_name");
  const to_number= formData.get("to_number");
  const to_email = formData.get("to_email");
  const content = formData.get("content");

  if (!title || !to_name ||!to_number || !to_email || !content) {
    return console.error("Por favor rellene los campos");
  }

  // Crear el contenido del correo que se enviará a ti mismo
  const adminEmailContent = `
    <p><strong>Asunto:</strong> ${title}</p>
    <p><strong>Nombre del cliente:</strong> ${to_name}</p>
    <p><strong>Numero del cliente:</strong> ${to_number}</p>
    <p><strong>Correo del cliente:</strong> ${to_email}</p>
    <p><strong>Mensaje:</strong> ${content}</p>
  `;

  // Enviar el correo a ti mismo
  await sendEmail({
    subject: `Nuevo mensaje de formulario: ${title}`,
    to: [{ name: "Tu Nombre", email: "garcia2016weslin@gmail.com" }],
    htmlContent: adminEmailContent,
  });

  redirect("/pages/succes-email")
}