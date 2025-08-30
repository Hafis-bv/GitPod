import s from "./style.module.scss";
import brands from "../DataBase/brands";
import React from "react";

const Brands = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        {brands.map((brand) => (
          <img
            className={s.image}
            src={brand.logo}
            key={brand.id}
            alt={brand.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
