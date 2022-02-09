import Increase from "./components/Increase";

import style from "./style.module.css";
import "../../../../../../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CardProduct(props){
  const { data, close, setBasket } = props;
  
  const [ amount, setAmount ] = useState(1);

  return(
    <div className={style.container_product}>
      <FontAwesomeIcon className={`${style.close} ${close ? style.close_hidden : style.close_show}`} icon={"times"} />
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
        <Increase amount={amount} setAmount={setAmount}/>
        <div className={`${style.button} ${!close ? style.button_hidden : style.button_show}`}>
          <button 
            className={style.add} 
            onClick={() => setBasket((prev) => [...prev, data])}
          >
          Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
