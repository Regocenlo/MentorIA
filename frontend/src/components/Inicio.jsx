
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
         <div className="  w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950">
            <div id="encabezado" className="bg-black/30 backdrop-blur-sm py-6">
                <h1 className="text-3xl font-semibold text-white">
            mentor-<span className="text-blue-200">IA</span>
                </h1>
            </div>
            <div className='translate-y-30 flex flex-row space-x-95 ml-100'>
                <button onClick={Nivel} className="text-white text-3xl w-110 h-90 rounded-xl px-6 py-3
             bg-gradient-to-r from-blue-600 to-purple-600
              hover:border-purple-300 hover:shadow-[0_0_10px_#a855f7] transition">
                    Desafios
                </button>
                <button onClick={Practica} className="text-white text-3xl w-110 h-90 rounded-xl px-6 py-3
             bg-gradient-to-r from-blue-600 to-purple-600
              hover:border-purple-300 hover:shadow-[0_0_10px_#a855f7] transition">
                    Practica
                </button>
            </div>
            
            <div className="p-5 grid grid-cols-2 gap-10 mt-10 translate-y-50">
                <div className="text-white text-xl h-32 rounded-2xl px-4 py-3
                  bg-white/10 backdrop-blur-md border border-white/20
                  flex flex-col justify-center"> Progreso
                </div>
                <div className="relative text-white text-xl h-32 rounded-2xl px-4 py-3
                  bg-white/10 backdrop-blur-md border border-white/20
                  flex flex-col justify-center">
                    Racha
                <IconFlame stroke={2} className="absolute h-14 w-14 right-3 bottom-3 text-blue-300" />
                </div>
            </div>

            <div
  id="navegacion"
  className="fixed bottom-0 left-0 w-full h-16 
             bg-gray-800/50 backdrop-blur-md 
             border-t border-white/10
             flex items-center justify-around text-blue-100"
>
  <IconHome stroke={2} className="h-7 w-7 text-blue-400 scale-110 hover:text-white transition" />
  <IconUserCircle stroke={2} className="h-7 w-7 hover:text-white transition" />
  <IconSettingsCog stroke={2} className="h-7 w-7 hover:text-white transition" />
</div>
        </div>
    );
}