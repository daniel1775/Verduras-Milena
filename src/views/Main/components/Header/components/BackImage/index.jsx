import bg from "../../../../../../images/bg-header-movile.png";
import style from "./style.module.css";

export default function BackImage(props){
  const { stay } = props;

  return(
    <div className={style.backImage__container}>
      {stay()}
      <img className={style.backImage__bg} src={bg} alt="" />
    </div>
  );
}