import style from "./style.module.css";

export default function Stay(){
  return(
    <div className={style.stay__header}>
      <h3>Quédate en <span>casa</span> haz tus domicilios</h3>
      <button>Aquí</button>
    </div>
  );
}