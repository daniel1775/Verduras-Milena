import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Menu(props){
  const { show } = props;

  return(
    <ul className={`${style.menu_container} ${show ? style.show : style.hide}`}>
      <li>INICIO</li>
      <li>INFORMACION</li>
      <li>HISTORIA</li>
      <li>RECETAS</li>
      <li className={style.domicile}><Link to="/domicile">DOMICILIOS</Link></li>
    </ul>
  );
}