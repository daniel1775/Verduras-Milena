import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Stay(){
  return(
    <div className={style.stay__header}>
      <h3>Quédate en <span>casa</span> haz tus domicilios</h3>
      <Link to="/domicile"><button className={style.button_aqui}>Aquí</button></Link>
    </div>
  );
}