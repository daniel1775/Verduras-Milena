import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../../../../FontAwesome";
import { useState } from "react";

export default function SearchBox(props){
  const { onChangeFilter, setSearch } = props;
  const [ searchText, setSearchText ] = useState("");

  return(
    <div className={style.container_searchbox}>
      <input
        className={style.search_input}
        type="text"
        placeholder="Buscar producto..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <button 
        className={style.search_button}
        onClick={() => {
          setSearch(searchText);
          onChangeFilter(searchText);
          setSearchText("");
        }}
      >
        <FontAwesomeIcon icon="search" />
      </button>
    </div>
  );
}