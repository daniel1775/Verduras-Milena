import style from "./style.module.css";
import { NavLink } from "react-router-dom";

export default function Menu(props){
  const { show, onHideMenu } = props;

  return(
    <ul className={`${style.menu_container} ${show ? style.show : style.hide}`}>
      <li className={style.item} onClick={() => onHideMenu()}>
        <NavLink to="/" className={isActive => `${isActive ? style.active : ""}`}>
          INICIO
        </NavLink>
      </li>
      <li className={`${style.item} ${style.info}`} onClick={() => onHideMenu()}>
        <NavLink to="/" className={isActive => `${isActive ? style.active : ""}`}>
          INFORMACIÓN
        </NavLink>
      </li>
      <li className={style.item} onClick={() => onHideMenu()}>
        <NavLink to="/" className={isActive => `${isActive ? style.active : ""}`}>
          HISTORIA
        </NavLink>
      </li>
      <li className={style.item} onClick={() => onHideMenu()}>
        <NavLink to="/" className={isActive => `${isActive ? style.active : ""}`}>
          RECETAS
        </NavLink>
      </li>
      <li className={style.domicile} onClick={() => onHideMenu()}>
        <NavLink to="/domicile">
          DOMICILIOS
        </NavLink>
      </li>
    </ul>
  );
}