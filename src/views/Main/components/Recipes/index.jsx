import Title from "../../../../components/Title";
import CardImage from "../../../../components/CardImage";

import style from "./style.module.css";
import ajiaco from "../../../../images/ajiaco.png";
import papas from "../../../../images/papas.png";
import cocido from "../../../../images/cocido.png";
import sancocho from "../../../../images/sancocho.png";

export default function Recipes(){
  return(
    <div className={style.container_recipes}>
      <Title titleOne="RECETAS" titleTwo="" middle={false} />
        <div className={style.container_cards}>
          <CardImage image={ajiaco} title="Ajiaco"/>
          <CardImage image={papas} title="Papas chorriadas"/>
          <CardImage image={cocido} title="Cocido boyacense"/>
          <CardImage image={sancocho} title="Sancocho"/>
        </div>
    </div>
  );
}