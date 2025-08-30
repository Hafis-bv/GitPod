import s from "./style.module.scss";

const ContactInput = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.grid}>
        <div className={s.inp}>
          <p>FIRST NAME</p>
          <input type="text" />
        </div>
        <div className={s.inp}>
          <p>LAST NAME</p>
          <input type="text" />
        </div>
        <div className={s.inp}>
          <p>EMAIL</p>
          <input type="text" />
        </div>
        <div className={s.inp}>
          <p>COMPANY</p>
          <input type="text" />
        </div>
        <div className={`${s.inp} ${s.message}`}>
          <p>MESSAGE</p>
          <input type="text" />
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactInput;
