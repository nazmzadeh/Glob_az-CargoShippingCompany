/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Step.scss';
import { Title } from '../../../../components/TitleofSection/Title';
import deliveryIcon from './images/catdirilma-01.svg';
import deliveryImg from './images/step.svg';
import orderIcon from './images/nece-sifarish-edim-01-01-1.svg';
import payIcon from './images/odeme-01.svg';

export const Step = () => {
  return (
    <section id="step">
      <div className="myContainer">
        <Title value="SİZ ALIRSINIZ,BİZ ÇATDIRIRIQ" isWhite={false} />
        <div className="flex-row">
          <img className="main_img" src={deliveryImg} alt="delivery" />
          <div className="steps">
            <div className="how_to_order step">
              <img src={orderIcon} alt="how to order" />
              <div className="text">
                <h5>Necə sifariş edim?</h5>
                <p>Məhsulu seçin, Ödəniş edin, Məhsulu biz alırıq. </p>-<a href="#">Daha çox..</a>
              </div>
            </div>
            <div className="pay step">
              <img src={payIcon} alt="how to order" />
              <div className="text">
                <h5>Ödəmə</h5>
                <p>Visa, Master bank kartları. Bank kartları olmayanlara yerində nağd ödəniş. </p>-
                <a href="#">Daha çox..</a>
              </div>
            </div>
            <div className="delivery step">
              <img src={deliveryIcon} alt="how to order" />
              <div className="text">
                <h5>Çatdırılma</h5>
                <p>
                  Bağlama Türkiyə anbarına qəbul edilir. Yüklər qablaşdırılır və Azərbaycana göndərilir. Bakı
                  ofisindən bağlamalar təhvil verilir.{' '}
                </p>
                -<a href="#">Daha çox..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
