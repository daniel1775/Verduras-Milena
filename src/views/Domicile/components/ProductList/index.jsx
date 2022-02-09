import Title from "../../../../components/Title";

import style from "./style.module.css";

export default function ProductList(props){
  const { dataFilter, search, searchBox, onDataFilter } = props;
  
  return(
    <div className={style.container_products}>
      <Title titleOne="PRODUCTOS" titleTwo="" middle={false} />
      {searchBox}
      <div className={style.products_list}>
        <div className={style.filter_text}>
          <p>
            {dataFilter.length===0 && `No se encontraron resultados con ${search}, intente con otra palabra`}
            {(search.length>0 && dataFilter.length>0) && `Filtro: "${search}"`}
          </p>
        </div>
        {onDataFilter}
      </div>
    </div>
  );
}
