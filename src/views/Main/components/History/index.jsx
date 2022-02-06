import Title from "../../../../components/Title";

import style from "./style.module.css";

export default function History(){
  return(
    <div className={style.container_history}>
      <Title titleOne="NUESTRA" titleTwo="HISTORIA" middle={true}/>
      <div className={style.text_history}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic types.
        </p>
      </div>
    </div>
  );
}