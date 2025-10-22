import icono from "../assets/Icono.png";
export default function Loggin() {

  return (
   <div>
        <img src="icono" width={147} height={147} />
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        className="bg-white-7777 text-neutral-800 font-semibold py-2 px-4 rounded-lg border-2 hover:border-blue-500 transition"
      >
        Iniciar sesión
      </button>
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Crear cuenta
      </button>
    </div>
   </div>
  );
}
