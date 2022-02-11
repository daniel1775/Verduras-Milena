import style from "./style.module.css";
import logo from "../../../../images/logo.svg";

import Stay from "./components/Stay";
import BackImage from "./components/BackImage";

export default function Header(){
  return(
    <section className={style.container_header}>
      <img className={style.header_logo} src={logo} alt="" />
      <BackImage stay={<Stay />} />
    </section>
  );
}