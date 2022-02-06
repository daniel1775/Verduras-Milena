
import style from "./style.module.css";

export default function CardRecipe(props){
  const { image, title } = props;

  return(
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <img className={style.image} src={image} alt="" />
    </div>
  );
}