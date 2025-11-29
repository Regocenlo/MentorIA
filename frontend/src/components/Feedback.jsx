import { useNavigate } from "react-router-dom"



export default function Feedback(){
    const navigate = useNavigate();

    function salir(){
        navigate("/Niveles");
    }

    return(
        <div className="w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 p-6 flex justify-center items-center">
            <div className="w-full max-w-[1600px] h-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <textarea placeholder="aca muestra el codigo del usuario" className="border border-gray-600 bg-gray-700 rounded-xl p-4 h-[85vh] w-full text-base md:text-lg text-white shadow-lg shadow-black/30 resize-none"/>
                
                <button onClick={salir}className="mx-auto my-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md shadow-black/40 transition duration-200">
                    Terminar
                </button>

                <textarea readOnly placeholder="aca aparece lo que corrige la IA"className="border border-gray-600 bg-gray-800 rounded-xl p-4 h-[85vh] w-full text-base md:text-lg text-green-300 shadow-lg shadow-black/30 resize-none"/>

            </div>    
            
            
           
        </div>
    )
}