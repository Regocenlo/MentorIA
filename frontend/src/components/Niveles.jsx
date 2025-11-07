import { IconChevronLeft, IconHome, IconHomeFilled, IconUserCircle,IconSettingsCog } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";



export default function Niveles(){
    
 const botones = [];
 for (let i = 1; i <= 10; i++) {
  botones.push(i);
}

const navigate = useNavigate();
function abrirDesafio(){
    navigate("/InterfazDesafio");
}

    return(
        <div className=" mx-auto h-[812px] w-[375px] border
         border-black rounded-3xl shadow-lg 
         bg-gray-900
         relative overflow-hidden">
            <div id="encabezado" className="bg-gray-600 py-6 flex justify-center">
                <IconChevronLeft stroke={6} className='cursor-pointer active:text-blue-100 absolute flex left-5' onClick={() => navigate(-1)} />
                <h1 className="text-2xl font-semibold text-white">
            mentor-<span className="text-blue-200">IA</span>
                </h1>
            </div>
            <h2 className="text-xl translate-y-76 -translate-x-33">Niveles</h2>
            <div id="niveles" className="grid grid-cols-4 gap-3 mx-5 justify-center items-center place-content-center h-full ">
                {botones.map((num) => (<button key={num} className="border-2 border-blue-600 rounded px-3 py-1 hover:bg-blue-100" onClick={abrirDesafio}>
                    {num}
                </button>
            ))}
            </div>
            <div id="navegacion" className="absolute bg-gray-600 py-6 left-0 w-full h-15 bottom-0 gap-3.5"> 
                <IconHome stroke={2} className='h-8 w-8 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' />
                <IconUserCircle stroke={2} className='h-8 w-8 absolute translate-x-70 -translate-y-2'/>
                <IconSettingsCog stroke={2} className='h-8 w-8 absolute translate-x-15 -translate-y-2' />
            </div>

       </div>

    );
}