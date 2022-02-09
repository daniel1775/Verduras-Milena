import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import SearchBox from "./components/ProductList/components/SearchBox";
import CartButton from "./components/CartButton";
import CardProduct from "./components/ProductList/components/CardProduct";

import { useState } from "react";

import "../../FontAwesome";
import data from "../../data/data.json";
import style from "./style.module.css";

import { Link } from "react-router-dom";

export default function Domicile(props){
  const { basket, setBasket } = props;

  const [ dataFilter, setDataFilter ] = useState(data);
  const [ search, setSearch ] = useState("");

  const changeFilter = (param) => {
    setDataFilter(data.filter( element => (
      element.name.toLowerCase().includes(param) ||
      element.type.toLowerCase().includes(param)
    )))
  }

  return(
    <div className={style.container_domicile}>
      <Link to="/shopping"><CartButton amount={basket.length} /></Link>
      <Categories onChangeFilter={changeFilter} setSearch={setSearch} />
      <ProductList 
        dataFilter={dataFilter}
        search={search}
        searchBox={<SearchBox onChangeFilter={changeFilter} setSearch={setSearch} />}
        onDataFilter={dataFilter.map((element) => (
          <CardProduct key={element.id} data={element} close={true} setBasket={setBasket} />
        ))}
      >
        
      </ProductList>
    </div>
  );
}
