import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardProduct from "../Domicile/components/ProductList/components/CardProduct";

import style from "./style.module.css";
import "../../FontAwesome";

export default function Shopping(props){
  const { basket, setBasket, onHide } = props;

  const [ total, setTotal ] = useState();

  useEffect(() => {
    onHide();
  }, [])

  useEffect(() => {
    let sum=0;
    basket.forEach(element => {
      sum+=element.price*element.amount;
    });
    setTotal(sum);
  }, [ basket ]);

  return(
    <div className={style.container_shopping}>
      <div className={style.back}>
        <Link to="/domicile">
          <FontAwesomeIcon icon="arrow-left"/>
        </Link>
      </div>
      <h2 className={style.title}>TUS PRODUCTOS</h2>
      <div className={style.product_list}>
        {basket.map(element => (
          <CardProduct key={element.id} data={element} close={false} setBasket={setBasket} />
        ))}
      </div>
      <div className={style.total_cont}>
        <p className={style.total}>Total: <span>{`$${total}`}</span></p>
      </div>
      <Link to="/confirm"><button className={style.button}>COMPRAR</button></Link>
    </div>
  );
}
