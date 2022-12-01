import "./Footer.scss";
import logo from "./logo.png";
import phone from "./phone.svg";

export const Footer = () => {
  return (
    <div className="firstDiv">
      <ul>
        <li>
          <a href="#/">
            <img src={logo} alt="logo" />
            <li>
              <div className="header-phone">
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
              </div>
            </li>
          </a>
        </li>
      </ul>
    </div>
  );
};
