import Nav from "../Nav";
import Header from "./components/Header";

import style from "./style.module.css";

export default function Main(){
  return(
    <div className={style.containeer}>
      <Nav />
      <Header />
    </div>
  );
}