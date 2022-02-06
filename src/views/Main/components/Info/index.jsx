import Card from "./components/Card";

import style from "./style.module.css";
import tomato from "../../../../images/tomato.svg";
import piggy from "../../../../images/piggy.svg";
import truck from "../../../../images/truck.svg";

export default function Info(){
  return(
    <div className={style.container_info}>
      <Card img={tomato} title="Calidad" text="Disfrute de los mejores productos"/>
      <Card img={piggy} title="Domicilio gratis" text="Por compras mayores a $100.000"/>
      <Card img={truck} title="Envíos rápidos" text="Y disponibles a cualquier parte de la ciudad"/>
    </div>
  );
}