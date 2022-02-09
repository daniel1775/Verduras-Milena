import style from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function Menu(props){
  const { show, onHideMenu } = props;

  return(
    <ul className={`${style.menu_container} ${show ? style.show : style.hide}`}>
      <li>INICIO</li>
      <li>INFORMACION</li>
      <li>HISTORIA</li>
      <li>RECETAS</li>
      <li onClick={() => onHideMenu()}>
        <NavLink
          to="/domicile" 
          className={isActive => `${style.domicile} ${isActive ? style.active : ""}`}
        >
        DOMICILIOS
        </NavLink>
      </li>
      
    </ul>
  );
}