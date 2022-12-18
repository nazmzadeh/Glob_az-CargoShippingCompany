import './OrderingPart.scss';
import { useState } from 'react';

export const OrderingPart = () => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const addForm = () => {
    <div>hi</div>;
  };

  return (
    <>
      <div className="sifaris">
        <form className="sifaris-form">
          <div className="sifarish-top">
            <h4>Sifariş et</h4>
          </div>
          <div className="form-inside">
            <div className="product-number">
              Məhsul # <span>{count}</span>{' '}
            </div>
            <div className="products">
              <div className="link-div">
                <label htmlFor="link">Məhsulun linki</label>
                <input type="text" id="link" />
              </div>
              <div className="second-row">
                <div className="product-price">
                  <label htmlFor="price">Məhsulun qiyməti</label>
                  <input type="text" id="price" />
                </div>
                <div className="product-count">
                  <label htmlFor="count">Məhsulun sayı</label>
                  <input type="text" id="count" placeholder="1" />
                </div>
                <div className="product-cargo">
                  <label htmlFor="cargo">Türkiyə daxili karqo</label>
                  <input type="text" id="cargo" placeholder="0" />
                </div>
              </div>
              <div className="third-row">
                <div className="product-color">
                  <label htmlFor="color">Məhsulun rəngi</label>
                  <input type="text" id="color" />
                </div>
                <div className="product-size">
                  <label htmlFor="size">Məhsulun ölçüsü</label>
                  <input type="text" id="size" />
                </div>
              </div>
            </div>
            <div className="form-bottom">
              <div className="urgent-order">
                <input type="checkbox" id="urgent-checkbox" />
                <label htmlFor="urgent-checkbox">Təcili sifariş (+ 2$)</label>
              </div>
              <div className="final-price">+5% = 0 TL</div>
            </div>
          </div>
        </form>
        <div className="sifaris-bottom">
          <button
            className="add-product"
            onClick={() => {
              incrementCount();
              addForm();
            }}
          >
            + Yeni link əlavə et
          </button>
        </div>
        <div className="sifaris-finish">
          <span className="random-text">
            Toplam ödəniləcək məbləğ: <span className="final-price">	&nbsp; 0 TL</span>
          </span>
          <div className="random-buttons">
            <button className="sebete-at">Səbətə at</button>
            <button className="odenish">Birbaşa ödənişə keç</button>
          </div>
        </div>
      </div>
    </>
  );
};
