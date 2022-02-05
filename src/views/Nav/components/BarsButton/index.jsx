import style from "./style.module.css";
import "../../../../FontAwesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BarsButton(props){
  const { onToggle } = props;

  return(
    <div>
      <span onClick={() => onToggle()}><FontAwesomeIcon className={style.bars} icon="bars" /></span>
    </div>
  );
}