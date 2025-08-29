import React from "react";
import s from "./style.module.scss";

const PricingHero = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.hero}>
          <h1>Pricing</h1>
          <p>Get more Gitpod, pay less.</p>
          <button>Try Now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
