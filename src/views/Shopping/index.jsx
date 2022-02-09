
import CardProduct from "../Domicile/components/ProductList/components/CardProduct";
import style from "./style.module.css";

export default function Shopping(props){
  const { basket, setBasket } = props;

  return(
    <div className={style.container_shopping}>
      <h2 className={style.title}>TUS PRODUCTOS</h2>
      <div className={style.product_list}>
        {console.log(basket)}
        {basket.map(element => (
          <CardProduct key={element.id} data={element} close={false} setBasket={setBasket}/>
        ))}
      </div>
      
    </div>
  );
}