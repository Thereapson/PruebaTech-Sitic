import style from './Landing.module.css';
import { NavLink } from 'react-router-dom';

function Landing() {

    return (
        <div className={style.conteiner}>
            <NavLink to='/datos-cliente'>
                <button className={style.boton}>INGRESAR DATOS</button>
            </NavLink>
        </div>
    )
};

export default Landing;