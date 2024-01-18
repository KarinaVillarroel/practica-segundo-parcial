import React  from "react";
import '../style/Tarea.css';
import {AiOutlineCloseCircle } from "react-icons/ai";
function Tarea({texto , completada}){
    return(
    <div className={completada ? 'tarea-contenedor completa':'tarea-contenedor'}>
        <div className='tarea-texto'>
            {texto}
        </div>
        <div className='tarea-contenedor-icono'>
           <AiOutlineCloseCircle className='tarea-icono'/>    
        </div>
    </div>
    );
}
export default Tarea;