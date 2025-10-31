import { useState } from "react";
import logo from "../assets/logo.png";

export default function CrearCuenta() {

    const [correo, setCorreo]= useState('');
    const [pass, setPass]= useState('');

    return(
        <div className="mx-auto h-[812px] w-[375px] border
         border-black rounded-3xl shadow-lg 
         bg-purple-900
         relative overflow-hidden">
        <img src={logo} width={147} height={147} className="mx-auto -translate-z-50 -translate-x-[-5px] y -translate-y-[-90px]" />
        <h2 className="text-white -translate-y-[-80px] -translate-x-[-8px] font-sans">Mentor <span className="text-white">-</span> <span className="text-blue-600">IA</span></h2>
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-lg  text-white -translate-y-[270px] -translate-x-[-5px]" >Crear cuenta</p>
                <p className="text-xs text-white -translate-y-60 -translate-x-[10px]">Introduce tu correo electrónico para registrarte en esta aplicación.</p>
                <input 
                type="email" 
                placeholder=" email@domain.com" 
                className="bg-white h-10 w-80 rounded-2xl -translate-y-[230px] text-lg text-gray-900" 
                value={correo} 
                onChange={(e)=>setCorreo(e.target.value)}>
                </input>
                <input 
                type="password" 
                placeholder=" password" 
                className="bg-white h-10 w-80 rounded-2xl -translate-y-[200px]  text-lg text-gray-900" 
                value={pass} 
                onChange={(e)=>setPass(e.target.value)} >
                </input>
                <button className="bg-blue-500 text-white 
                    font-semibold text-lg text-medium 
                    h-10 w-80 
                    rounded-lg -translate-y-[170px]" >
                 Continuar
                </button>
                <p className="text-gray-200 -translate-y-40 font-extralight">-----------o-----------</p>

            </div>
        </div>
    );
}
