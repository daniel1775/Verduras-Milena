
import style from "./style.module.css";

export default function CardImage(props){
  const { image, title, small, onDoClick } = props;

  return(
    <div className={style.container} onClick={()=>onDoClick()}>
      <div className={`${style.title} ${small && style.title_small}`}>{title}</div>
      {image}
    </div>
  );
}