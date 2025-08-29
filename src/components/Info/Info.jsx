import s from "./style.module.scss";
import React from "react";

const Info = () => {
  return (
    <div className="container">
      <div className={s.text}>
        <p>
          Select project, <br />
          <span>
            check dependencies, checkout branch, view readme.txt, install tools,
            run build, run test,
          </span>
          <br />
          start coding.
        </p>
      </div>
    </div>
  );
};

export default Info;
