import Increase from "./components/Increase";

import style from "./style.module.css";
import "../../../../../../FontAwesome";
import { useState } from "react";

export default function CardProduct(props){
  const [ amount, setAmount ] = useState(1);

  const { data } = props;

  return(
    <div className={style.container_product}>
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
        <div className={style.button_cont}>
          <button className={style.add}>Añadir</button>
        </div>
      </div>
    </div>
  );
}
