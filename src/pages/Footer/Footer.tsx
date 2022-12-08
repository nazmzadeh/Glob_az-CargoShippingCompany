/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable prettier/prettier */
import './Footer.scss';
import { Link } from 'react-router-dom';
import email from './email.svg';
import logo from './logo.png';
import marker from './marker.svg';
import phone from './phone.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="rows">
          <div className="coll">
            <div className="footer-logo desktop-only">
              <a href="#/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="footer-contact">
              <ul>
                <li className="footer-contact-phone">
                  <img src={phone} alt="" />
                  <a href="tel:+994 12 525 9001" title="">
                    +994 12 525 9001,&nbsp;
                  </a>
                  <a href="tel:+994 50 833 9010" title="">
                    +994 50 833 9010,&nbsp;
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
                      Yeni Yasamal yaşayış massivi, Dadaş Bünyadzadə küç, 1 (Azza-nın yanı), AZ1012, Bakı
                    </p>
                    <p>
                      <b>Azadlıq filialı:</b>
                      Binəqədi rayonu, Kəmalə Nərmin şadlıq sarayının arxası, (Azadlıq metrosunun yaxınlığı)
                      AZ1116, Bakı
                    </p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="coll">
            <div className="footer-menu">
              <h4>Menu</h4>
              <ul>
                <li>
                  <Link to={'tarifler'}>Tarfiler</Link>
                </li>
                <li>
                  <Link to={'Mağazalar'}>Mağazalar</Link>
                </li>
                <li>
                  <Link to={'Faq'}>Faq</Link>
                </li>
                <li>
                  <Link to={'elaqe'}>Əlaqə</Link>
                </li>
                <li>
                  <Link to={'mexfilik'}>Məxfilik</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="coll">
            <div className="subscribe">
              <form id="w0" action="/az/subscribe.html" method="POST">
                <input
                  type="hidden"
                  name="_csrf-frontend"
                  value="7R7BIG-b2feGTQnvfkakrbuFLsdTv1xzkP8oiGLfHt_ccvNKXcONv_ILJJo0C--e3uhHjQHULADxvnjeVIZGpQ=="
                />
                <h4 className="subscribe-title">Newsletter</h4>
                <p className="subscribe-desc">Yeniliklərdən xəbərdar olmaq üçün abunə olun</p>
                <div className="subscribe-form">
                  <div className="form-group field-subscribe-email required">
                    <input
                      type="text"
                      id="subscribe-email"
                      className="subscribe-input"
                      name="Subscribe[email]"
                      placeholder="Email..."
                      aria-required="true"
                    />

                    <div className="help-block"></div>
                  </div>{' '}
                  <button type="button" className="subscribe-btn">
                    Abunə ol
                  </button>
                </div>
              </form>
              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/www.glob.az/"
                      target="_blank"
                      title=""
                      className="footer-social-fa"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/glob.az/"
                      target="_blank"
                      title=""
                      className="footer-social-ins"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/994516157210"
                      target="_blank"
                      title=""
                      className="footer-social-wp"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCwk8vPpDiScnh0_7b4aUd6Q"
                      target="_blank"
                      title=""
                      className="footer-social-yt"
                      rel="noreferrer"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <div className="copy-container"> © Glob.az 2022. Bütün Hüquqlar Qorunur</div>
      </div>
    </footer>
  );
};
