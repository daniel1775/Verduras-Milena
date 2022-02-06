import style from "./style.module.css";

export default function Card(props){
  const { img, title, text} = props;

  return(
    <div className={style.container_card}>
      <div className={style.icon_cont}>
        <img className={style.icon} src={img} alt="" />
      </div>
      <div className={style.box}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}