import s from "./style.module.scss";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.links}>
            <div className={s.link}>
              <h1>Gitpod</h1>
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Changelog</a>
              <a href="#">Self-Hosted</a>
              <a href="#">Gitpod vs GitHub Codespaces</a>
              <a href="#">Status</a>
            </div>
            <div className={s.link}>
              <h1>Developer</h1>
              <a href="#">Getting started</a>
              <a href="#">Screencasts</a>
              <a href="#">Blog</a>
              <a href="#">Documentation</a>
              <a href="#">Report a bug</a>
              <a href="#">Community</a>
            </div>
            <div className={s.link}>
              <h1>Company</h1>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Media Kit</a>
            </div>
            <div className={s.link}>
              {" "}
              <h1>Legal</h1>
              <a href="#">Imprint</a>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className={s.logo}></div>
          </div>
          <div className={s.info}>
            <div className={s.footerLogo}>
              <img src="/footer/footer.svg" alt="gitpod" />
              <p>Copyright © 2021 Gitpod</p>
            </div>
            <div className={s.socialMedia}>
              <a href="#">
                <img src="/footer/twitter.svg" alt="" />
              </a>
              <a
                href="https://github.com/Hafis-bv?tab=repositories"
                target="_blank"
              >
                <img src="/footer/github.svg" alt="" />
              </a>
              <a href="#">
                <img src="/footer/messager.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
