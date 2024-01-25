"use client"
import { useState } from "react";
import formStyles from "@/styles/formStayles.module.css";
import Link from "next/link"

const Registro = () => {
    const [email,setEmail] = useState('')
    const [password,setPasword] = useState('')

    const handleRegistro= ()=>{
        console.log(`Login con correo: ${email} y contraseña: ${password}`);
    }
    return(
        <div className={formStyles.modal}>
            <div className={formStyles.modal_content}>
                <h2>Registro</h2>
                <label htmlFor="email">Correo:</label>
                <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e)=>{
                e.preventDefault
                setEmail(e.target.value)

                }}/>
                
                <label htmlFor="password">Contraseña:</label>
                <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e)=> {
                e.preventDefault
                setPasword(e.target.value)

                }}/>

                <button onClick={handleRegistro}>Registrar</button>
                <p>¿Ya tienes cuenta? <Link href="pages/registro">Iniciar Sesión</Link></p>
                <button onClick={()=>{}}>Cerrar</button>

            </div>
        </div>
    )
}

export default Registro