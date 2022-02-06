import Nav from "../Nav";
import Header from "./components/Header";
import Info from "./components/Info";
import History from "./components/History";
import Recipes from "./components/Recipes";
import Footer from "./components/Footer";

import style from "./style.module.css";

export default function Main(){
  return(
    <div className={style.containeer}>
      <Nav />
      <Header />
      <Info />
      <History />
      <Recipes />
      <Footer />
    </div>
  );
}