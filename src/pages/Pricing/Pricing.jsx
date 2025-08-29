import React from "react";
import s from "./style.module.scss";
import PricingHero from "../../components/PricingHero/PricingHero";
import PricingSubscription from "../../components/PricingSubscription/PricingSubscription";

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      <PricingSubscription />
    </div>
  );
};

export default Pricing;
