import { handleForm } from "../app/sendEmailAction";

export default function ChatGmail() {
  return (
    <div className="bg-white shadow-xl w-full px-10 py-5 h-auto">
      <h3>Envíanos un Mensaje</h3>
      <p>Completa el formulario para ponerte en contacto</p>
      <form
        action={handleForm}
        method="POST"
        className="flex flex-col gap-y-4 mt-5"
      >
        <input
          type="text"
          name="title"
          placeholder="Asunto"
          className="border-2 rounded-lg"
        />

        <input
          type="text"
          name="to_name"
          placeholder="Escribe tu nombre"
          className="border-2 rounded-lg"
        />

        <input
          type="email"
          name="to_email"
          placeholder="Correo"
          className="border-2 rounded-lg"
        />
        <textarea
          name="content"
          placeholder="Escribe en lo que te podemos ayudar"
          className="border-2 rounded-lg"
        />
        <button className="text-white bg-green-500 hover:bg-blue-800 rounded-lg">
          Enviar
        </button>
      </form>
    </div>
  );
}