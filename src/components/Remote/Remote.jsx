import s from "./style.module.scss";
import React from "react";

const Remote = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Remote-first. Secure by design.</h1>
        <img className={s.image} src="/remote.png" alt="" />
        <div>
          <p>
            You no longer need an over-powered laptop to code, Gitpod works just
            as smoothly on a Chromebook or iPad. All you need is a browser.
            Gitpod centralizes all source code and never stores it on insecure
            machines and networks.
          </p>
          <div className={s.btns}>
            <img src="/chrome.png" alt="" />
            <img src="/firefox.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remote;
