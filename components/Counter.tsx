"use client"
import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return(
        <div>
            <p>Haz hecho click {counter} veces</p>
            <button className="counterButton" onClick={()=> {
                setCounter(counter+1);

            }}>
                Haz click</button>

            <button className="resetButton" onClick={()=> {
                setCounter(0);

            }}>
                Resetear</button>
        </div>
    )

}

export default Counter;
