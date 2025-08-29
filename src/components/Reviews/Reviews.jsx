import s from "./style.module.scss";
import reviews from "../DataBase/reviews.js";
import React from "react";

const Reviews = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Used by 400,000+ developers.</h1>
        <div className={s.reviews}>
          {reviews.map((com) => (
            <div className={s.review} key={com.id}>
              <p>{com.title}</p>
              <div className={s.creator}>
                <div className={s.icon}>
                  <img src={com.icon} alt="hh" />
                </div>
                <div className={s.info}>
                  <h3>{com.name}</h3>
                  <p>{com.creator}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
