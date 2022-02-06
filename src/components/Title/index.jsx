
import style from "./style.module.css";

export default function Title(props){
  const { titleOne, titleTwo, middle } = props;

  return(
    <h2 className={style.container_title}>
      {middle ? <>{titleOne}<hr/>{titleTwo}</> : <>{`${titleOne} ${titleTwo}`}<hr/></>}
    </h2>
  );
}