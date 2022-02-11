import TextFooter from "./components/TextFooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../FontAwesome";
import style from "./style.module.css";

export default function Footer(props){
  const { hideSection } = props;

  return(
    <footer className={`${style.container_footer} ${hideSection ? style.hide : style.show}`}>
      <TextFooter 
        icon={<FontAwesomeIcon className={style.font_icon} icon="clock"/>} 
        text="Lun-Dom: 6:00am-4pm"
      />
      <TextFooter 
        icon={<FontAwesomeIcon className={style.font_icon} icon="phone-alt"/>} 
        text="3043327794" 
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
    </footer>
  );
}