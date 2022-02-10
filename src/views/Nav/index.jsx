import Menu from "./components/Menu";

import style from "./style.module.css";

import BarsButton from "./components/BarsButton";
import { useState } from "react";


export default function Nav(props){
  const { hideSection } = props;
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const hideMenu = () => {
    setToggle(false);
  }

  return(
    <nav className={`${style.container} ${hideSection ? style.hide : style.show}`}>
      <div className={style.nav}>
        <BarsButton onToggle={handleToggle} />
      </div>
      <Menu show={toggle} onHideMenu={hideMenu}/>
    </nav>
  );
}