import Menu from "../Menu";

import style from "./style.module.css";

import BarsButton from "./components/BarsButton";
import { useEffect, useState } from "react";


export default function Nav(){
  const [ toggle, setToggle ] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  }

  return(
    <div className={`${style.container} ${toggle ? style.container_completed : style.container_reduced}`}>
      <div className={style.nav}>
        <BarsButton onToggle={handleToggle} />
      </div>
      <Menu show={toggle} />
    </div>
  );
}