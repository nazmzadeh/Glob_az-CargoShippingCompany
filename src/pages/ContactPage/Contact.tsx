import './Contact.scss';
// import './images/e';
import phone from './images/phone_.svg';
import email from './images/email.svg';
import chevron from './images/chevron-right.svg';
import marker from './images/marker.svg';
import fb from './images/fb.svg';
import ins from './images/ins.svg';
import wp from './images/wp.svg';
import yt from './images/yt.svg';
import { useEffect, useState } from 'react';

export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <ul className="first-list">
            <li>
              <a href="/">Ana səhifə</a>
            </li>
            <li>
              <img src={chevron} alt="/" />
            </li>
            <li className="second-li">
              <a href="/"> Əlaqə</a>
            </li>
          </ul>
        </div>

        <div className="col-lg-12 col-md-12 col-xs-12">
          <h1 className="section-title"> ƏLAQƏ</h1>
        </div>
        <div className="col-lg-12 col-md-12 col-xs-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12154.645617216025!2d49.7963393!3d40.3941964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb672201e88e0118a!2sGlob.az%20-%20Yeni%20yasamal%20Filial%C4%B1!5e0!3m2!1saz!2s!4v1671106036932!5m2!1saz!2s"
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <div className="col-lg-12 col-md-12 col-xs-12">
          <div className="contact-info">
            <h3>Əlaqə məlumatlari</h3>
            <ul className="contact-list">
              <li className="mail">
                <a href="mailto: info@glob.az">
                  {' '}
                  <img src={email} alt="/" /> info@glob.az
                </a>
              </li>
              <li className="phone">
                <a href="/">
                  {' '}
                  <img src={phone} alt="/" />
                  +994 12 525 9001, +994 50 833 9010, +994 99 833 9010
                </a>
              </li>
              <li>
                <a href="http://127.0.0.1:5500/index.html">
                  {' '}
                  <img src={marker} alt="/" />
                  <b>Azadliq</b> (Ünvan: Binəqədi rayonu, Şövkət Məmmədova küçəsi 2 (Kəmalə Nərmin şadlıq
                  sarayının arxası))
                </a>
              </li>

              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Yeni Yasamal - Məhəmməd Xiyabani</b>(Ünvan: Şeyx Məhəmməd Xiyabani küçəsi 33b. (ətçilər
                  adlanan yer) qırmızı binanın altında. Yeni açılan Bazarstore ilə üzbə-üz)
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Yeni Yasamal - Əsəd Əhmədov </b>(Ünvan: Yeni Yasamal, Əsəd Əhmədov küçəsi 22)
                </a>
              </li>
              <li>
                {' '}
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Xırdalan </b>(Ünvan: Xırdalan filialı: Xırdalan ş., H.Əliyev prospekti 11,bina 4 (Kristal
                  Abşeron 2))
                </a>
              </li>
              <li>
                {' '}
                <a href="/">
                  {' '}
                  <img src={marker} alt="/" />
                  <b> 28 may </b>(Ünvan: Nəsimi rayonu, Şəmsi Bədəlbəyli küçəsi 100A (28 Mall-ın yanı))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Xalqlar dostluğu - Əhmədli </b>(Ünvan: Seyid Əzim Şirvani 13X (Maxi.az-ın arxa tərəfi))
                </a>
              </li>
              <li>
                {' '}
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Memar Əcəmi təhvil məntəqəsi </b>(Ünvan: Bakı şəh, Hüseynbala Əliyev küç 3 (Servis 313)
                  (Antep restoranı ilə üzbə-üz))
                </a>
              </li>
              <li>
                {' '}
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Mingəçevir təhvil məntəqəsi </b>(Ünvan: Mingəçevir şəh. H.Əliyev pr 226 (Superfon yanı,
                  İLQAR Telekom içində, YENİKARGO təhvil məntəqəsi))
                </a>
              </li>
              <li>
                {' '}
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Gəncə </b>Gəncə (Ünvan: Tağı Arani küçəsi, 57 saylı ATS-in yanı (Gəncə Kargo))
                </a>{' '}
              </li>
              <li>
                {' '}
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Yevlax təhvil məntəqəsi</b>(Ünvan: Çingiz Mustafayev 1 (UĞURLU CEHİZİM mağazasının
                  içində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Masallı təhvil məntəqəsi</b>(Ünvan: M.Talışxanov küç & Puşkin küç 1 (Köhnə bazar, TƏZƏ
                  AĞA marketin yanı, "ƏLİ telekom" içərisində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Oğuz təhvil məntəqəsi</b>(Ünvan: Heydər Əliyev prospekti AVTOVAĞZAL-dan 200 m yuxari Meşə
                  idarəsinin yanı "OĞUZFON" içərisində)
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Balakən təhvil məntəqəsi</b> (Ünvan: BALAKƏN şəh. (ESTEE DOR parfumeriya ilə üzbə-üz.
                  ELVİN Foto studiyanın içərisində ) YENİKARGO təhvil məntəqəsi)
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Ağdaş təhvil məntəqəsi</b>(Ünvan: H.Əliyev pros. 89 ("ÇİNAR şirniyyat evinin içərisinde)
                  YENİKARGO təhvil məntəqəsi)
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Zaqatala təhvil məntəqəsi</b> (Ünvan: ZAQATALA bazarı telefoncular sirası (İNCİ mobile)
                  (V.İsmayılov küç))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Şəmkir təhvil məntəqəsi</b>(Ünvan: 20yanvar kuç №25 (ELİT t\m və SOLİTON elektroniks
                  qarşısı. SMART mağazanın içində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Lankaran təhvil məntəqəsi </b>
                  (Ünvan: Lənkəran şəh. M Ələkbərov küç (Universitetin Rektorluq binasindan MEQA cehizliyə
                  gedən yol üstünde.BAZAR ƏTRAFI))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Qax təhvil məntəqəsi</b>
                  (Ünvan: H. Əliyev prosp. (Kruq, dört yol, polis idarəsinin qarşısı) "NAR rəsmi diler"
                  dükanın içərisində.)
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Şəki təhvil məntəqəsi</b>(Ünvan: ŞƏKİ şəh. Sabit Rəhman küç. (Loğman aptekin yanı, kənd
                  avtovağzalı ile üzbə-üz AVİAKASSANIN içərisində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Quba təhvil məntəqəsi</b> (Ünvan: QUBA şəh. Heydər Əliyev pros. 196a (köhnə aftovağzalın
                  yanı, 5 mərtəbənin altı, BARSA telefon mağazasının içərisində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Qəbələ təhvil məntəqəsi</b>(Ünvan: QƏBƏLƏ şəh, H.Əliyev pros. 158 (5 mərtəbələrin yanı.
                  Köhnə Antaliya Ticarət mərkəzi, SPEKTR mağazasının içərisində) )
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>İsmayıllı təhvil məntəqəsi</b> (Ünvan: İSMAYILLI şəh. H.Əliyev pros. QALA CƏRGƏSİ ("GÜVƏN
                  servis" Telefon mağazasının içərisində) YENİKARGO təhvil məntəqəsi)
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Xaçmaz təhvil məntəqəsi</b> (Ünvan: Xaçmaz şəh. N.Nərimanov küç 106 (N.Nərimanov
                  heykəlinin yanı, POLİQRAFİYA mağazasının içərisində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Cəlilabad təhvil məntəqəsi</b> (Ünvan: CELİLABAD şəh. H. Əliyev pros 282a. (POLİS idarəsi
                  ilə MƏHKƏMƏNİN aralığında, BEST ELEKTRONIKA mağazanın içərisində) )
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Sumqayıt təhvil məntəqəsi</b> (Ünvan: Sumqayit şəh, H. Əliyev pros. 340a (4-cu mikro
                  rayon) (Ordubad marketdən 100m H.Əliyev parkına tərəf gedin))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Bərdə təhvil məntəqəsi</b> (Ünvan: BƏRDƏ Ş. ÜNVAN(BƏRDƏ PEŞƏ LİSEYİNİN QARŞISI,
                  BEŞMƏRTƏBƏNİN ALTI "MƏTİN" KOMPYUTER KURSUNUN İÇƏRİSİNDƏ))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Ağcabədi təhvil məntəqəsi</b> (Ünvan: AĞCABƏDİ ŞƏH. MƏMMƏDƏMİN RƏSULZADƏ küç. (QƏLƏBƏ
                  RESTORANININ qarşısı, "QƏLƏBƏ TELEKOMUN" içərisində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Salyan təhvil məntəqəsi</b> (Ünvan: SALYAN səh, Y.Qasımov küç 2 VAĞZAL ərazisi, AKSESS
                  BANK və MUĞAN şad\sarayının yanı ("DƏNİZ" telefon mağazasının içərisində))
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={marker} alt="/" />
                  <b>Şirvan təhvil məntəqəsi</b>(Ünvan: ŞİRVAN şəhəri, Fariz Eynullayev kuç. 1 "ZİLLİ" KİŞİ
                  geyiminin və "DEPO" aptekin yanı, KÖHNƏ BAZARIN QARŞISI. ("MOBİ STORE SHİRVAN", AZERCELL
                  mağazasının içərisində))
                </a>
              </li>
            </ul>
            <div className="contact-socials">
              <ul>
                <li>
                  <a href="https://www.facebook.com/www.glob.az/">
                    <img src={fb} alt="/" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/glob.az/">
                    <img src={ins} alt="/" />
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send/?phone=994516157210&text&type=phone_number&app_absent=0">
                    <img src={wp} alt="/" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCwk8vPpDiScnh0_7b4aUd6Q">
                    <img src={yt} alt="/" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
