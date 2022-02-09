import data from "../../../../data/data.json";
import TextFooter from "./components/TextFooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../FontAwesome";
import style from "./style.module.css";

export default function Footer(){
  return(
    <div className={style.container_footer}>
      <TextFooter 
        icon={<FontAwesomeIcon className={style.font_icon} icon="clock"/>} 
        text="Lun-Dom: 6:00am-4pm"
      />
      <TextFooter 
        icon={<FontAwesomeIcon className={style.font_icon} icon="phone-alt"/>} 
        text="3023194184" 
      />
      <TextFooter 
        icon={<FontAwesomeIcon className={style.font_icon} icon="envelope"/>} 
        text="verdurasmilena2605@gmail.com" 
      />
      <TextFooter 
        icon={<FontAwesomeIcon className={style.font_icon} icon="map-marker-alt"/>} 
        text={<>Plaza Paloquemao<br/>Local 83067</>} 
      />
      <p className={style.rights}>Todos los derechos reservados © 2022</p>
    </div>
  );
}