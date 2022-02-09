import Title from "../../../../components/Title";
import CardProduct from "./components/CardProduct";

import style from "./style.module.css";

export default function ProductList(props){
  const { dataFilter, search, children } = props;
  
  return(
    <div className={style.container_products}>
      <Title titleOne="PRODUCTOS" titleTwo="" middle={false} />
      {children}
      <div className={style.products_list}>
        <div className={style.filter_text}>
          <p>
            {dataFilter.length===0 && `No se encontraron resultados con ${search}, intente con otra palabra`}
            {(search.length>0 && dataFilter.length>0) && `Filtro: "${search}"`}
          </p>
        </div>
        {dataFilter.map((element) => (
          <CardProduct key={element.id} data={element}/>
        ))}
      </div>
    </div>
  );
}
