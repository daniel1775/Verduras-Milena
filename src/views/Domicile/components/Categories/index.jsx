import Title from "../../../../components/Title";
import CardImage from "../../../../components/CardImage";

import style from "./style.module.css";
import category from "../../../../data/category.json";

export default function Categories(props){
  const { onChangeFilter, setSearch } = props;

  return(
    <div className={style.container_categories}>
      <Title titleOne="CATEGORIAS" titleTwo="" middle={false} />
      <div className={style.cont_card}>
        <CardImage
          onDoClick={() => {
            onChangeFilter("fruit");
            setSearch("Frutas");
          }}
          image={<img className={style.category} src={category[0].image} alt=""/>}
          title={category[0].name}
          small={true}
        />
        <CardImage
          onDoClick={() => {
            onChangeFilter("vegetable");
            setSearch("Vegetales");
          }}
          image={<img className={style.category} src={category[1].image} alt=""/>}
          title={category[1].name}
          small={true}
        />
      </div>
    </div>
  );
}