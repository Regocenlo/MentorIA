import { useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function CrearCuenta() {

    const [correo, setCorreo]= useState('');
    const [pass, setPass]= useState('');
    const navigate = useNavigate();

    function cuestionario(){
        navigate("/Cuestionario");
    }
    

    return(
        <div className=" w-full h-screen overflow-hidden 
         bg-purple-900 relative">
        <img src={logo} width={100} height={100} className="translate-x-243 translate-y-20"/>
        <h2 className="text-white -translate-y-[-80px] -translate-x-[-8px] font-sans">Mentor <span className="text-white">-</span> <span className="text-blue-600">IA</span></h2>
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-3xl  text-white -translate-y-[260px] -translate-x-[-5px]" >Crear cuenta</p>
                <p className="text-2xl text-white -translate-y-60 -translate-x-[10px]">Introduce tu correo electrónico para registrarte en esta aplicación.</p>
                <input 
                type="email" 
                placeholder=" email@domain.com" 
                className="bg-white h-15 w-330 rounded-2xl -translate-y-[230px] text-2xl text-gray-900" 
                value={correo} 
                onChange={(e)=>setCorreo(e.target.value)}>
                </input>
                <p className="text-gray-200 -translate-y-55 font-extralight">-------------------o-------------------</p>
                <input 
                type="password" 
                placeholder=" password" 
                className="bg-white h-15 w-330 rounded-2xl -translate-y-[200px]  text-2xl text-gray-900" 
                value={pass} 
                onChange={(e)=>setPass(e.target.value)} >
                </input>
                <button className="bg-blue-500 text-white 
                    font-semibold text-lg text-medium 
                    h-10 w-100 
                    rounded-lg -translate-y-[170px]" onClick={cuestionario} >
                 Continuar
                </button>
                

            </div>
        </div>
    );
}
