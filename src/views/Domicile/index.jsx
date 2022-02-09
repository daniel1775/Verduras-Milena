import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import SearchBox from "./components/ProductList/components/SearchBox";
import { useState } from "react";

import data from "../../data/data.json";

export default function Domicile(){
  const [ dataFilter, setDataFilter ] = useState(data);
  const [ search, setSearch ] = useState("");

  const changeFilter = (param) => {
    setDataFilter(data.filter( element => (
      element.name.toLowerCase().includes(param) ||
      element.type.toLowerCase().includes(param)
    )))
  }

  return(
    <>
      <Categories onChangeFilter={changeFilter} setSearch={setSearch} />
      <ProductList dataFilter={dataFilter} search={search}>
        <SearchBox onChangeFilter={changeFilter} setSearch={setSearch} />
      </ProductList>
    </>
  );
}
