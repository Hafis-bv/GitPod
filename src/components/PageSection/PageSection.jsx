import s from "./style.module.scss";

const PageSection = ({
  title,
  text,
  isButtonActive = false,
  buttonText = "",
}) => {
  return (
    <div className={s.wrapper}>
      <h1>{title}</h1>
      <p>{text}</p>
      {isButtonActive && <button className={s.button}>{buttonText}</button>}
    </div>
  );
};

export default PageSection;
