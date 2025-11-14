import { useNavigate } from "react-router-dom";
import icono from "../assets/Icono.png";



export default function Login() {

  const navigate = useNavigate();
  function crearCuenta(){
    navigate("/CrearCuenta");
  }

  function iniciarSesion(){
    navigate("/Inicio");
  }

  return (
   <div className="bg-gray-400 flex w-full h-screen overflow-hidden">

    
    <div className="w-[60%] text-center relative overflow-hidden">
    
        <div className="opacity-75 absolute  w-70 h-70 bg-blue-600 rounded-full -translate-z-2.5  top-auto left-auto -translate-x-[60px]  -translate-y-[190px]"></div>
        <div className="opacity-45 absolute  w-100 h-100 bg-violet-600 rounded-full z-0  top-auto right-auto -translate-x-[-100px]  -translate-y-[230px]"></div>
        <div className="opacity-50 absolute  w-50 h-50 bg-blue-600 rounded-full -translate-z-2.5  top-auto left-auto translate-x-160  translate-y-19"></div>
        <div className="opacity-25 absolute  w-150 h-150 bg-violet-600 rounded-full z-0  top-auto right-auto translate-x-[-100px]  translate-y-[230px]"></div>
        <div className="opacity-50 absolute  w-20 h-20 bg-blue-600 rounded-full -translate-z-2.5  top-auto left-auto translate-x-60  translate-y-190"></div>
        <div className="absolute  w-40 h-40 bg-violet-600 rounded-full z-0  top-auto right-auto translate-x-250  translate-y-175"></div>
        <div className="opacity-25 absolute  w-150 h-150 bg-blue-600 rounded-full -translate-z-2.5  top-auto left-auto translate-x-160  translate-y-190"></div>
        <div className="opacity-25 absolute  w-90 h-90 bg-violet-600 rounded-full z-0  top-auto right-auto translate-x-120  translate-y-85"></div>
        <div className="opacity-55 absolute  w-100 h-100 bg-violet-600 rounded-full z-0  top-auto right-auto translate-x-200  -translate-y-5"></div>

   
      <img src={icono} width={170} height={170} className="mx-auto -translate-z-50  y -translate-y-[-160px]" />
      <h2 className="text-black  -translate-y-[-156px] font-sans">Mentor <span className="text-white">-</span> <span className="text-blue-600">IA</span></h2>
      <p className="text-2xl max-w-sm text-center leading-relaxed translate-x-105 translate-y-52 text-gray-200">Aqui aprenderas o reforzaras conceptos importantes de la programación</p>
        
    </div>  

    <div className="bg-gray-600 w-[40%] h-240">
        <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl  text-white -translate-y-25 -translate-x-[95px]">En caso de tener una cuenta</p>
        <button className="
        bg-white text-neutral-800 font-semibold text-lg text-medium 
        h-10 w-106  rounded-lg border-2 -translate-y-25" onClick={iniciarSesion}>
          Iniciar sesión
        </button>
        <p className="text-gray-200 -translate-y-20 font-extralight">--------------o--------------</p>
        <button className="bg-blue-500 text-white 
        font-semibold text-lg text-medium 
        h-10 w-106 
        rounded-lg
        hover:bg-blue-600 transition -translate-y-14" onClick={crearCuenta} >
            Crear cuenta
          </button>
          <p className="text-black text-xl">bienvenido a Mentor -<span className="text-blue-600">IA</span> , donde aprenderas lógica y programación</p>
        </div>
    </div>

   </div>
  );
}
