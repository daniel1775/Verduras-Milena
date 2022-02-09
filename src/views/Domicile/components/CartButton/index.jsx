import style from "./style.module.css";
import "../../../../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartButton(){
  return(
    <button className={style.shopping_cart}>
      <FontAwesomeIcon icon="shopping-cart" />
    </button>
  );
}