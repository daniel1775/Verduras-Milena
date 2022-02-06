
import style from "./style.module.css";

export default function TextFooter(props){
  const { icon, text } = props;

  return(
    <div className={style.text_footer}>
      {icon}
      <p>{text}</p>
    </div>
  );
}