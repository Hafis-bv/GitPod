import s from "./style.module.scss";
import brands from "../DataBase/brands";
import React from "react";

const Brands = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <img src="time.png" alt="" />
      </div>
    </div>
  );
};

export default Brands;

//   <div className={s.wrapper}>
//         {brands.map((brand) => (
//           <img src={brand.logo} alt={brand.name} />
//         ))}
//       </div>
