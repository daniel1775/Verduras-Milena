import style from "./style.module.css";

export default function Logo(props){
  const { children } = props;

  return(
    <div>
      {children}
    </div>
  );
}