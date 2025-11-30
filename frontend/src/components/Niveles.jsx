import { IconChevronLeft, IconHome, IconHomeFilled, IconUserCircle,IconSettingsCog } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
import { useGenerateChallenge } from '../hooks/useGenerateChallenge';
import logo from "../assets/logo.png";



export default function Niveles(){

    const {ejercicios,loading,error}=useGenerateChallenge("javascript","principiante")
    const navigate = useNavigate();

    if (loading) return (
        <div className="min-h-screen bg-purple-900 flex flex-col items-center justify-center text-white">
          <div className="text-center">
                  <img
                    src={logo}
                    alt="Logo Mentor-IA"
                    className="w-48 h-48 md:w48 md:h-48 mx-auto mb-4 animate-pulse"/>
          
                  <h1 className="text-3xl md:text-5xl font-semibold text-white">
                    mentor-<span className="text-blue-400">IA</span>
                  </h1>
                  <h2 className="text-lg md:text-2xl font-light text-gray-200">
                    Generando desafios...</h2>
    
                </div>
        </div>
      );
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>
    

    const botones = [];
    for (let i = 1; i <= 10; i++) {
        botones.push(i);
    }

    function abrirDesafio(num){

        if (!ejercicios || ejercicios.length === 0) {
            console.warn("Ejercicios aún no disponibles");
            return;
        }

        //Al ingresar a la navegacion pasamos por parametro el ejercicio correspondiente
        const desafio = ejercicios?.[`Ejercicio ${num}`] || ejercicios?.[`Desafio ${num}`]
        navigate("/InterfazDesafio",{
            state:{desafio:desafio}
        });
    }

        return(
            <div className="   w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
                <div id="encabezado" className="bg-black/30 backdrop-blur-sm py-6">
                <h1 className="text-3xl font-semibold text-white">
            mentor-<span className="text-blue-200">IA</span>
                </h1>
            </div>


            <h2 className="text-xl text-white mt-10 mb-6 ml-5 font-semibold">Niveles</h2>
            <div id="niveles" className="grid grid-cols-3 sm:grid-cols-4 gap-4 mx-5 justify-center items-start place-content-start">
                {botones.map((num) => (
                <button key={num} onClick={() => abrirDesafio(num)} className="bg-white/10 border border-blue-500/40 text-blue-100 font-medium rounded-lg px-4 py-3
                hover:bg-blue-500/20 
                hover:border-blue-300 
                hover:text-white
                shadow-md shadow-blue-500/20
                transition-all">
                    {num}
                </button>
            ))}
            </div>
            <div id="navegacion" className="fixed bottom-0 left-0 w-full h-16 bg-gray-900/40 backdrop-blur-md
             border-t border-white/10
             flex items-center justify-around
             text-blue-100"
>
                <IconHome stroke={2} className="h-7 w-7 text-blue-400 scale-110" />
                <IconUserCircle stroke={2} className="h-7 w-7" />
                <IconSettingsCog stroke={2} className="h-7 w-7" />
</div>


            </div>

        );
}