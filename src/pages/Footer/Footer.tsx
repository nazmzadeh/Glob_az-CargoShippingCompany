import "./Footer.scss";
import logo from "./logo.png";
import phone from "./phone.svg";
import marker from "./marker.svg";
import email from "./email.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="rows">
          <div className="coll">
            <div className="footer-logo">
              <a href="#/">
                <img src={logo} alt="logo" />
              </a>
              <div className="footer-contact">
                <ul>
                  <li className="footer-contact-phone">
                    <img src={phone} alt="" />
                    <a href="tel:+994 12 525 9001" title="">
                      +994 12 525 9001
                    </a>
                    <a href="tel:+994 50 833 9010" title="">
                      +994 50 833 9010
                    </a>
                    <a href="tel:+994 99 833 9010" title="">
                      +994 99 833 9010
                    </a>
                  </li>
                  <li className="footer-contact-mail">
                    <img src={email} alt="" />
                    <a href="mailto: info@glob.az" title="">
                      info@glob.az
                    </a>
                  </li>
                  <li className="footer-contact-address">
                    <img src={marker} alt="" />
                    <span>
                      <p>
                        <b>Yasamal filialı: </b>
                        Yeni Yasamal yaşayış massivi, Dadaş Bünyadzadə küç, 1
                        (Azza-nın yanı), AZ1012, Bakı
                      </p>
                      <p>
                        <b>Azadlıq filialı:</b>
                        Binəqədi rayonu, Kəmalə Nərmin şadlıq sarayının arxası,
                        (Azadlıq metrosunun yaxınlığı) AZ1116, Bakı
                      </p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="coll">
            <div className="footer-menu">
              <h4>Menu</h4>
              <ul>
                <li>
                  <Link to={"tarifler"}>Tarfiler</Link>
                </li>
                <li>
                  <Link to={"tarifler"}>Tarfiler</Link>
                </li>
                <li>
                  <Link to={"tarifler"}>Tarfiler</Link>
                </li>
                <li>
                  <Link to={"tarifler"}>Tarfiler</Link>
                </li>
                <li>
                  <Link to={"tarifler"}>Tarfiler</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="coll"></div>
        </div>
      </div>
      <div className="footer-copy"></div>
    </footer>
  );
};
