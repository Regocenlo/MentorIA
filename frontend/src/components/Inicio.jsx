
import { IconFlame, IconHome, IconUserCircle,IconSettingsCog }
 from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";



export default function Inicio(){

  function Boton({ activo }) {
  return (
    <button
      className={`text-2xl font-bold ${
        activo ? "text-blue-500" : "text-gray-400"
      }`}
    >
      Desafíos
    </button>
  );
}

    const navigate = useNavigate();
    function Nivel(){
        navigate("/Niveles");
    }
    function Practica(){
        navigate("/InterfazDesafio");
    }
    return( 
       <div className='bg-black'>
         <div className=" mx-auto h-[812px] w-[375px] border
         border-black rounded-3xl shadow-lg 
         bg-gray-900
         relative overflow-hidden">
            <div id="encabezado" className="bg-gray-600 py-6 flex justify-center">
                <h1 className="text-2xl font-semibold text-white">
            mentor-<span className="text-blue-200">IA</span>
                </h1>
            </div>
            <div className='translate-y-30'>
                <button onClick={Nivel} className="cursor-pointer text-3xl text-left w-72 h-20 border-2 border-blue-600 rounded px-3 py-1 hover:border-blue-100 hover:text-blue-100">
                    Desafios
                </button>
                <button onClick={Practica} className="mt-10 cursor-pointer text-3xl text-left w-72 h-20 border-2 border-blue-600 rounded px-3 py-1 hover:border-blue-100 hover:text-blue-100">
                    Practica
                </button>
            </div>
            
            <div className="p-5 grid grid-cols-2 gap-20 translate-y-20">   
                <div className="translate-y-40 text-xl w-30 h-40 border-2 border-blue-600 rounded px-3 py-1 ">
                progreso</div>
                <div className="translate-y-40 text-xl  w-30 h-40 border-2 border-blue-600 rounded px-3 py-1 ">
                Racha
                <IconFlame stroke={2} className='text-gradient-to-r from-blue-500 to-purple-600 absolute h-14 w-14 translate-x-10 translate-y-6'/>
                </div>
            </div>

            <div id="navegacion" className="absolute bg-gray-600 py-6 left-0 w-full h-15 bottom-0 gap-3.5"> 
                <IconHome stroke={2} className='text-blue-100 h-8 w-8 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' />
                <IconUserCircle stroke={2} className='h-8 w-8 absolute translate-x-70 -translate-y-2'/>
                <IconSettingsCog stroke={2} className='h-8 w-8 absolute translate-x-15 -translate-y-2' />
            </div>
        </div>
       </div> 
    );
}