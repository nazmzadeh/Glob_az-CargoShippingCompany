

import './TariffsPart.scss';
import turk from './turkey.svg';

export const Shops = () => {
  return (
    <>
      <div className="body-inside">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="/" title="">
                  Ana səhifə
                </a>
              </li>
              <li>
                <a href="/" title="">
                  Tariflər
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className="tariff">
          <h1 className="section-title">Tariflər</h1>
          <div className="container">
            <div className="country-tab">
              <ul className="country-tab-nav nav nav-tabs">
                <li className="nav-item">
                  <a data-toggle="tab" href="#content-2" className="nav-link active" title="">
                    <img className="turk-img" src={turk} alt="" />
                    <span>Türkiyə</span>
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="country-tab-content tab-pane active" id="content-2">
                  <div className="tariff-inside desktop-show">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Ölkə</th>
                          <th>Çəki aralığı</th>
                          <th>Adi məhsullar</th>
                          <th>Maye məhsullar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="country-2">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </td>
                          <td>0.001 kq-dan 0.100 kq-a qədər</td>
                          <td>0.7 $</td>
                          <td>0.7 $</td>
                        </tr>
                        <tr>
                          <td className="country-2">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </td>
                          <td>0.100 kq-dan 0.250 kq-a qədər</td>
                          <td>1.95 $</td>
                          <td>1.95 $</td>
                        </tr>
                        <tr>
                          <td className="country-2">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </td>
                          <td>0.250 kq-dan 0.500 kq-a qədər</td>
                          <td>2.95 $</td>
                          <td>2.95 $</td>
                        </tr>
                        <tr>
                          <td className="country-2">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </td>
                          <td>0.50 kq-dan 0.750 kq-a qədər</td>
                          <td>3.5 $</td>
                          <td>3.5 $</td>
                        </tr>
                        <tr>
                          <td className="country-2">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </td>
                          <td>0.750 kq-dan 1.00 kq-a qədər</td>
                          <td>3.9 $</td>
                          <td>3.9 $</td>
                        </tr>
                        <tr>
                          <td className="country-2">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </td>
                          <td>1 kq və üstü (Hər kiloqram üçün)</td>
                          <td>3.5 $</td>
                          <td>3.5 $</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mobile-show">
                    <h4 className="tariff-box-title">Adi məhsullar</h4>
                    <div className="row">
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">0.7 $</div>
                          <div className="tariff-content">0.001 kq-dan 0.100 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">1.95 $</div>
                          <div className="tariff-content">0.100 kq-dan 0.250 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">2.95 $</div>
                          <div className="tariff-content">0.250 kq-dan 0.500 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">3.5 $</div>
                          <div className="tariff-content">0.50 kq-dan 0.750 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">3.9 $</div>
                          <div className="tariff-content">0.750 kq-dan 1.00 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">3.5 $</div>
                          <div className="tariff-content">1 kq və üstü (Hər kiloqram üçün)</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mobile-show">
                    <h4 className="tariff-box-title">Maye məhsullar</h4>
                    <div className="row">
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">0.7 $</div>
                          <div className="tariff-content">0.001 kq-dan 0.100 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">1.95 $</div>
                          <div className="tariff-content">0.100 kq-dan 0.250 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">2.95 $</div>
                          <div className="tariff-content">0.250 kq-dan 0.500 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">3.5 $</div>
                          <div className="tariff-content">0.50 kq-dan 0.750 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">3.9 $</div>
                          <div className="tariff-content">0.750 kq-dan 1.00 kq-a qədər</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="tariff-box">
                          <div className="tariff-price">3.5 $</div>
                          <div className="tariff-content">1 kq və üstü (Hər kiloqram üçün)</div>
                          <div className="tariff-country">
                            <img className="turk-img" src={turk} alt="" />
                            Türkiyədən Bakıya
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="desktop-show br1" >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
