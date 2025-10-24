import { useNavigate } from "react-router-dom";
import icono from "../assets/Icono.png";



export default function Login() {

  const navigate = useNavigate();
  function crearCuenta(){
    navigate("/CrearCuenta");
  }

  function iniciarSesion(){
    navigate("/IniciarSesion");
  }

  return (
   <div className="mx-auto h-[812px] w-[375px] border
    border-gray-400 rounded-3xl shadow-lg 
     bg-gray-400
     relative overflow-hidden">
    <div className="absolute  w-70 h-70 bg-blue-600 rounded-full -translate-z-2.5  top-auto left-auto -translate-x-[60px] y -translate-y-[190px]"></div>
    <div className="absolute  w-100 h-100 bg-violet-600 rounded-full z-0  top-auto right-auto -translate-x-[-100px] y -translate-y-[230px]"></div>
    <img src={icono} width={147} height={147} className="mx-auto -translate-z-50 -translate-x-[0px] y -translate-y-[-160px]" />
    <h2 className="text-black -translate-y-[-156px] font-sans">Mentor <span className="text-white">-</span> <span className="text-blue-600">IA</span></h2>
    <div className="flex flex-col items-center justify-center h-screen">
    <p className="text-xs  text-white -translate-y-25 -translate-x-[95px]">En caso de tener una cuenta</p>
    <button className="
     bg-white text-neutral-800 font-semibold text-lg text-medium 
     h-10 w-86  rounded-lg border-2 -translate-y-25" onClick={iniciarSesion}>
      Iniciar sesión
    </button>
    <p className="text-gray-200 -translate-y-20 font-extralight">-----------o-----------</p>
    <button className="bg-blue-500 text-white 
    font-semibold text-lg text-medium 
     h-10 w-86 
    rounded-lg
     hover:bg-blue-600 transition -translate-y-14" onClick={crearCuenta} >
        Crear cuenta
      </button>
      <p className="text-black text-xs">bienvenido a Mentor -<span className="text-blue-600">IA</span> , donde aprenderas lógica y programación</p>
    </div>
   </div>
  );
}
