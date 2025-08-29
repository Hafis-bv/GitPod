import s from "./style.module.scss";
import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <div className={s.content}>
          <h1>
            Always <br /> Ready to Code.
          </h1>
          <p>
            Spin up fresh, automated dev environments for each task, in the
            cloud, in seconds.
          </p>
          <div className={s.btn}>
            <button>Try Now</button>
            <p>
              Open a workspace. <br /> Start from any Git context.
            </p>
          </div>
        </div>
        <div className={s.img}>
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
