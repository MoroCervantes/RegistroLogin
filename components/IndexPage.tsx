"use client"
import { useState } from "react"
import Login from "./Login"
import Registro from "./Registro"

const IndexPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegistro, setShowRegistro] = useState(false)

    const handleLoginClick =() => {
        setShowLogin(true)
    }

    const handleRegistroClick =() => {
        setShowRegistro(true)
    }

    const handleCloseLogin =() => {
        setShowLogin(false)

    }

    const handleInicioRegistro =() => {
        setShowRegistro(false)

    }

    return(

      <div>

        <button onClick={handleLoginClick}>Iniciar Sesión</button>
        {showRegistro && <Registro onClose={handleInicioRegistro}/>}
        <br/>
        <button onClick={handleRegistroClick}>Registro</button>
        {showLogin && <Login onClose={handleCloseLogin}/>}

      </div>
       
    )
}

export default IndexPage