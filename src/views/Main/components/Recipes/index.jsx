import Title from "../../../../components/Title";
import CardImage from "../../../../components/CardImage";

import style from "./style.module.css";
import ajiaco from "../../../../images/ajiaco.png";
import papas from "../../../../images/papas.png";
import cocido from "../../../../images/cocido.png";
import sancocho from "../../../../images/sancocho.png";

export default function Recipes(){
  return(
    <section className={style.container_recipes}>
      <Title titleOne="RECETAS" titleTwo="" middle={false} />
        <div className={style.container_cards}>
          <CardImage image={<img className={style.image} src={ajiaco} alt="" />} title="Ajiaco"/>
          <CardImage image={<img className={style.image} src={papas} alt="" />} title="Papas chorriadas"/>
          <CardImage image={<img className={style.image} src={cocido} alt="" />} title="Cocido boyacense"/>
          <CardImage image={<img className={style.image} src={sancocho} alt="" />} title="Sancocho"/>
        </div>
    </section>
  );
}