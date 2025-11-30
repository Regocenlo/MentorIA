import { useNavigate, useLocation  } from "react-router-dom"
import { useObtenerFeedback } from "../hooks/useObtenerFeedback";
import logo from "../assets/logo.png";

export default function Feedback(){
    const { state } = useLocation();
    const { desafio, codigo, output } = state;
    const {respuesta, loading, error} = useObtenerFeedback(desafio, codigo, output);
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
                    Obteniendo feedback...</h2>
    
                </div>
        </div>
      );
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>

    function salir(){
        navigate("/Niveles");
    }
    console.log(respuesta);
    return(
        <div className="w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 p-6 flex justify-center items-center">
            <div className="w-full max-w-[1600px] h-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <textarea 
                readOnly 
                value={codigo}
                className="border border-gray-600 bg-gray-700 rounded-xl p-4 h-[85vh] w-full text-base md:text-lg text-white shadow-lg shadow-black/30 resize-none"/>
                
                <button onClick={salir}className="mx-auto my-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md shadow-black/40 transition duration-200">
                    Terminar
                </button>

                <textarea 
                readOnly 
                value={respuesta ? `${respuesta.solution}\n${respuesta.feedback}` : ""}
                className="border border-gray-600 bg-gray-800 rounded-xl p-4 h-[85vh] w-full text-base md:text-lg text-green-300 shadow-lg shadow-black/30 resize-none"/>

            </div>    
            
            
           
        </div>
    )
}