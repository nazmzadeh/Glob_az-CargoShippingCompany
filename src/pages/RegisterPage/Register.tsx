import './Register.scss';
import chevron from './images/chevron-right.svg';
import airplane from './images/airplane.png';

export const Register = () => {
  return (
    <section id="register">
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
              <a href="/"> Faq</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-12 col-md-12 col-xs-12">
          <div className="row">
            <div className="col-lg-4">
              <img src={airplane} alt="/" />
            </div>
            <div className="col-lg-8">
              <div className="col-lg-12">
                <h4>Qeydiyyat</h4>
                <p>Ad və soyad bölmələrini doldurarkən ingilis şriftlərindən istifadə edin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
