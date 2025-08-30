import React from "react";
import PricingSubscription from "../../components/PricingSubscription/PricingSubscription";
import PageSection from "../../components/PageSection/PageSection";

const Pricing = () => {
  return (
    <>
      <PageSection
        title={"Pricing"}
        text={"Get more Gitpod, pay less."}
        isButtonActive // ={true}
        buttonText="Try now"
      />
      <PricingSubscription />
    </>
  );
};

export default Pricing;
