import bg_desktop from "../../../../../../images/bg-header-desktop.png";
import bg_movil from "../../../../../../images/bg-header-movile.png";
import style from "./style.module.css";

export default function BackImage(props){
  const { stay } = props;

  return(
    <div className={style.container_image}>
      {stay}
      <img className={style.movil_image} src={bg_movil} alt="" />
      <img className={style.desktop_image} src={bg_desktop} alt="" />
    </div>
  );
}