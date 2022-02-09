
import CardProduct from "../Domicile/components/ProductList/components/CardProduct";
import Title from "../../components/Title";
import style from "./style.module.css";

export default function Shopping(props){
  const { basket } = props;

  return(
    <div className={style.container_shopping}>
      <Title titleOne="Tus Productos" titleTwo="" middle={false}/>
      <div className={style.product_list}>
        {basket.map(element => (
          <CardProduct key={element.id} data={element} close={false}/>
        ))}
      </div>
      
    </div>
  );
}