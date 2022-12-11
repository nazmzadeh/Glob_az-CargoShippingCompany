import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import phone from './phone.svg';

const signClick = () => {
  console.log('blbals');
};

export const Header = () => {
  return (
    <header className="header header-inside">
      <div className="topHeader">
        <div className="container">
          <div className="header-top-inside">
            <div className="headerTopLeft">
              <select className="langOpt" id="lang">
                <option value="AZ">AZ</option>
                <option value="RU">RU</option>
                <option value="ENG">ENG</option>
              </select>
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
            </div>
            <div className="header-top-right">
              <button className="singIn-button" onClick={signClick}>
                Daxil ol
              </button>
              <span className="random">/</span>
              <a href="/az/signup.html" title="">
                Qeydiyyat
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomHeader">
        <div className="container">
          <div className="header-btm-inside">
            <div className="header-logo">
              <a href="#/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="headerMenu desktopOnly">
              <ul className="headerList">
                <li>
                  <Link to={'tarifler'}>Tarfiler</Link>
                  {/* <a href="/tariff.html" title="">
                Tariflər
              </a> */}
                </li>
                <li>
                  <Link to={'Mağazalar'}>Mağazalar</Link>
                </li>
                <li>
                  <Link to={'Faq'}>Faq</Link>
                </li>
                <li>
                  <Link to={'Əlaqə'}>Əlaqə</Link>
                </li>
                <li>
                  <Link to={'Mexfilik'}>Məxfilik</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
