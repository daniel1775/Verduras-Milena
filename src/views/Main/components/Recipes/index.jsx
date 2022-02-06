import Title from "../../../../components/Title"
import CardRecipe from "./components/CardRecipe"

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
          <CardRecipe image={ajiaco} title="Ajiaco"/>
          <CardRecipe image={papas} title="Papas chorriadas"/>
          <CardRecipe image={cocido} title="Cocido boyacense"/>
          <CardRecipe image={sancocho} title="Sancocho"/>
        </div>
    </div>
  );
}