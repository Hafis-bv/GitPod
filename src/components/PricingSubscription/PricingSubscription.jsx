import s from "./style.module.scss";

const PricingSubscription = () => {
  const pricings = [
    {
      id: 1,
      month: "1 month",
      price: "€29.95",
    },
    {
      id: 2,
      month: "2 month",
      price: "€19.95",
    },
    {
      id: 3,
      month: "3 month",
      price: "€16.95",
    },
  ];
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.subscription}>
          <h1>Sign up to be the first to receive matches.</h1>

          {pricings.map((pricing) => (
            <button key={pricing.id} className={s.month}>
              <span className={s.plan}>{pricing.month}</span>
              <span className={s.price}>{pricing.price}</span>
            </button>
          ))}

          <button className={s.purchase}>Purchase now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingSubscription;
