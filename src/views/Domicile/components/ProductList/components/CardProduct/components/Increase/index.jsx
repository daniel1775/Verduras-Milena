import style from "./style.module.css";
import "../../../../../../../../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Increase(props){
  const { amount, setAmount } = props;

  return(
    <div className={style.container_increase}>
      <button className={style.button} onClick={() => amount!==1 && setAmount(amount-1)}>
        <FontAwesomeIcon icon="minus"/>
      </button>
      <div className={style.amount}>{amount}</div>
      <button className={style.button} onClick={()=>setAmount(amount+1)}>
        <FontAwesomeIcon icon="plus"/>
      </button>
    </div>
  );
}
