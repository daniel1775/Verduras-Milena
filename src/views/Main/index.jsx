import Header from "./components/Header";
import Info from "./components/Info";
import History from "./components/History";
import Recipes from "./components/Recipes";

import style from "./style.module.css";
import { useEffect } from "react";

export default function Main(props){
  const { onShow } = props;

  useEffect(() => {
    onShow();
  }, []);

  return(
    <main className={style.containeer}>
      <Header />
      <Info />
      <History />
      <Recipes />
    </main>
  );
}