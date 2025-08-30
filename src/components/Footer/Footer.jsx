import FooterColumn from "../FooterColumn/FooterColumn";
import s from "./style.module.scss";
import {
  gitpodLinks,
  developerLinks,
  companyLinks,
  legalLinks,
} from "../DataBase/footer";

const Footer = () => {
  const socials = [
    {
      id: 1,
      icon: "/footer/twitter.svg",
      title: "Twitter",
      href: "https://github.com/Hafis-bv",
    },
    {
      id: 2,
      icon: "/footer/github.svg",
      title: "Github",
      href: "https://github.com/Hafis-bv",
    },
    {
      id: 3,
      icon: "/footer/messager.svg",
      title: "Message",
      href: "https://github.com/Hafis-bv",
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.links}>
            <FooterColumn title="Gitpod" data={gitpodLinks} />
            <FooterColumn title="Developer" data={developerLinks} />
            <FooterColumn title="Company" data={companyLinks} />
            <FooterColumn title="Legal" data={legalLinks} />
          </div>
          <div className={s.info}>
            <div className={s.footerLogo}>
              <img src="/footer/footer.svg" alt="gitpod" />
              <p>Copyright © 2021 Gitpod</p>
            </div>
            <div className={s.socialMedia}>
              {socials.map((social) => (
                <a key={social.id} href={social.href}>
                  <img src={social.icon} alt={social.title} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
