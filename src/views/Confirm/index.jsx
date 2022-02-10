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
  }, [])

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
        <a href="https://api.whatsapp.com/send?phone=573155299982&text=MiRey">
          <button className={style.button}>¡HAZ TU PEDIDO!</button>
        </a>
      </div>
    </section>
  );
}