import style from "./style.module.css";
import "../../../../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartButton(props){
  const { amount } = props;

  return(
    <div className={style.container_cartbutton}>
      <div className={style.amount}>{amount}</div>
      <button className={style.shopping_cart}>
        <FontAwesomeIcon icon="shopping-cart" />
      </button>
    </div>
  );
}