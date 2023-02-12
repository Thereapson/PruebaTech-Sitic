import React, { useState } from 'react';
import style from './DatosCliente.module.css'


function DatosAptos() {

    const [values, setValues] = useState(
        window.localStorage("values")
    );

    const setLocalStorage = values => {
        try {
            setValues(values)
            window.localStorage.setItem("values", values)
        } catch (error) {
            console.error(error)
        }
    }



    const submitar = (e) => {
        e.preventDefault();
    }

    return (
        <div className={style.conteiner}>
            <form action="" id="formulario">
                <h1>POR FAVOR INGRESE</h1>
                <h1>NOMBRES Y APELLIDOS</h1>
                <input placeholder="inserte nombres y apellidos" value={values} onChange={e.target.value}></input>
                <h1>CORREO ELECTRÓNICO</h1>
                <input placeholder="inserte correo" value={values}></input>
                <div></div>
                <input type="submit" onClick={(e) => submitar(e)} value='ENVIAR' onChange={e.target.value}></input>
            </form>
            <div id="error"></div>
        </div>
    )
};

export default DatosAptos;