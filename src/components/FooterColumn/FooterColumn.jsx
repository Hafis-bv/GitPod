import { Link } from "react-router-dom";
import s from "./style.module.scss";
const FooterColumn = ({ title, data }) => {
  return (
    <div className={s.link}>
      <h1>{title}</h1>
      {data.map((link) => (
        <Link to={link.href} key={link.id}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterColumn;
