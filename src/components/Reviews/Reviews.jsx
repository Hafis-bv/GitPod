import s from "./style.module.scss";
import reviews from "../DataBase/reviews.js";

const Reviews = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Used by 400,000+ developers.</h1>
        <div className={s.reviews}>
          {reviews.map((review) => (
            <div className={s.review} key={review.id}>
              <p>{review.title}</p>
              <div className={s.creator}>
                <div className={s.icon}>
                  <img src={review.userInfo.profile} alt="User profile" />
                </div>
                <div className={s.info}>
                  <h3>{review.userInfo.name}</h3>
                  <p>{review.userInfo.job}</p>
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
