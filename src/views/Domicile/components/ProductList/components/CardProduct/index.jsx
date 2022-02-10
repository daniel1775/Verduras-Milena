import Increase from "./components/Increase";

import style from "./style.module.css";
import "../../../../../../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CardProduct(props){
  const { data, close, setBasket } = props;
  
  const [ amount, setAmount ] = useState(data?.amount ? data.amount : 1);

  const addProduct = prev => {
    let aux = prev.filter(element => (
      element.id === data.id
    ));
    // Check ===
    if(aux===0)
      return([...prev, {...data, "amount": amount}]);
  }

  return(
    <div className={style.container_product}>
      <button 
        className={`${style.close} ${close ? style.close_hidden : style.close_show}`}
        onClick={() => setBasket(prev => (
          prev.filter(element => (
            element.id !== data.id
          ))
        ))}
      >
        <FontAwesomeIcon icon={"times"}
        />
      </button>
      <img className={style.product_image} src={data.image} alt="" />
      <div className={style.container_info}>
        <div className={style.cont_name}>
          <h3>
            {data.name_alt ? data.name_alt : data.name}
          </h3>
          <p>
            Precio: {data.price} {data.unit ? " / Ud." : "/ Lb"}
          </p>
        </div>
        <Increase amount={amount} setAmount={setAmount} />
        <div className={`${style.button} ${!close ? style.button_hidden : style.button_show}`}>
          <button
            className={style.add}
            onClick={() => setBasket((prev) => addProduct(prev))}
          >
          Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
