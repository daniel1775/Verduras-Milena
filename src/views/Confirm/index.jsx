import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.css";

export default function Confirm(props){
  const { basket, onHide } = props;

  const [ name, setName ] = useState("");
  const [ dir, setDir ] = useState("");

  useEffect(() => {
    onHide();
  });

  const sendJSON = () => {
    let message = `https://api.whatsapp.com/send?phone=573043327794&text=Nombre:%20${name}%0ADirección:%20${dir}%0A%0A`;
    let total = 0;

    basket.forEach(element => {
      total+=element.amount*element.price;
      message+=`Producto: ${element.name}%0ACantidad: ${element.amount} lbs%0ASub-total: $${element.amount*element.price}%0A%0A`;
    });

    message+=`Total%20a%20pagar:%20$${total}`;

    return(message);
  }

  return(
    <section className={style.container_confirm}>
      <div className={style.back}>
        <Link to="/shopping">
          <FontAwesomeIcon icon="arrow-left"/>
        </Link>
      </div>
      <h2>Una última cosa...</h2>
      <p>
        Completa los siguientes campos para llevar tu domicilio
      </p>
      <div className={style.label}>
        <label>
          Nombre / empresa
          <input
            className={style.input}
            type="text"
            placeholder="Digita tu nombre"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
      </div>
      <div className={style.label}>
        <label>
          Digita tu dirección
          <input 
            className={style.input} 
            type="text"
            placeholder="Dirección"
            value={dir}
            onChange={event => setDir(event.target.value)}
          />
        </label>
      </div>
      <div className={style.button_cont}>
        <button className={style.button}>
          <a href={sendJSON()}>
            ¡HAZ TU PEDIDO!
          </a>
        </button>
      </div>
    </section>
  );
}