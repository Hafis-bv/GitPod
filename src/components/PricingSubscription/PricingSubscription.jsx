import s from "./style.module.scss";
import React from "react";

const PricingSubscription = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.subscription}>
          <h1>Sign up to be the first to receive matches.</h1>
          <button className={s.month}>
            <span className={s.plan}>1 month</span>
            <span className={s.price}>9.99$</span>
          </button>
          <button className={s.month}>
            <span className={s.plan}>12 month</span>
            <span className={s.price}>99.99$</span>
          </button>
          <button className={s.month}>
            <span className={s.plan}>24 month</span>
            <span className={s.price}>199.99$</span>
          </button>
          <div>
            <button className={s.purchase}>Purchase now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSubscription;
