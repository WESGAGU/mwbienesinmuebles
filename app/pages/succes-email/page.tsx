import Link from "next/link";
const succesEmail = () => {
    return (  
        <div className="flex flex-col items-center justify-center h-96">
            <h1 className="text-2xl md:text-4xl">Mensaje enviado con exito! 🎉</h1>
            <p>Los pondremos en contacto contigo lo mas ante posible</p>
            <Link href={"/"}
            className="mt-3 bg-green-400 p-5 rounded-xl hover:bg-blue-400">
            Volver al incio
            </Link>
        </div>
    );
}
 
export default succesEmail;