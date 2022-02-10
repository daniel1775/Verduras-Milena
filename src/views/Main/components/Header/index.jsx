import style from "./style.module.css";
import logo from "../../../../images/logo.svg";

import Stay from "./components/Stay";
import BackImage from "./components/BackImage";

export default function Header(){
  return(
    <section className={style.header__container}>
      <img className={style.header__logo} src={logo} alt="" />
      <BackImage stay={() => <Stay />} />
    </section>
  );
}