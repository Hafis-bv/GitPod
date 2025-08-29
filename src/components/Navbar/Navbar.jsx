import s from "./style.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Pricing", href: "/pricing" },
    { id: 3, title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="container">
      <div className={s.wrapper}>
        <Link to={"/"}>
          <img src="/logo.svg" alt="" />
        </Link>
        <div className={s.list}>
          {navLinks.map((link) => (
            <Link className={s.link} key={link.id} to={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className={s.rightMenu}>
          <button className={s.btn}>Contact</button>
          <button
            className={s.menu}
            onClick={() => setIsNavActive(!isNavActive)}
          >
            {isNavActive ? (
              <GrClose color="#fff" size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </button>
        </div>
        {isNavActive && (
          <div className={s.menuActive}>
            <div className={s.mobileList}>
              {navLinks.map((link) => (
                <Link className={s.link} key={link.id} to={link.href}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
