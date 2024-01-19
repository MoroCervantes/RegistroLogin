"use client"
import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return(
        <div>
            <p>Haz hecho click {counter} veces</p>
            <button onClick={()=> {
                setCounter(counter+1);

            }}>
                Haz click</button>
        </div>
    )

}

export default Counter;


//TAREA HACER UN BOTON PARA RESETEAR A CERO 