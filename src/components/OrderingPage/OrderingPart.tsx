import './OrderingPart.scss';
import { OrderingForm } from '../OrderingForm/OrderingForm';
import { useState } from 'react';
import x from './x.svg';

export const OrderingPart = () => {
  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const [{ items }, setItems] = useState({ items: [<></>] });
  const addItem = () => {
    items.push(
      <div key={items.length}>
        <div className="form-inside">
          <div className="product-number">
            <div>
              Məhsul # <span>{count}</span>
            </div>
            {count > 0 && (
              <div className="close-order">
                <button className="close-order-button">
                  <img src={x} alt="" />
                </button>
              </div>
            )}
          </div>
          <OrderingForm />
        </div>
      </div>,
    );
    setItems({ items: [...items] });
  };

  return (
    <>
      <div className="sifaris">
        <div className="sifarish-top">
          <h4>Sifariş et</h4>
        </div>
        <div className="form-list">
          {items}
          <div className="form-inside">
            <div className="product-number">
              <div>
                Məhsul # <span>{count}</span>
              </div>
              {count > 1 && (
                <div className="close-order">
                  <button className="close-order-button">
                    <img src={x} alt="" />
                  </button>
                </div>
              )}
            </div>
            <OrderingForm />
          </div>
        </div>
        <div className="sifaris-bottom">
          <button
            className="add-product"
            onClick={() => {
              incrementCount();
              addItem();
            }}
          >
            + Yeni link əlavə et
          </button>
        </div>
        <div className="sifaris-finish">
          <span className="random-text">
            Toplam ödəniləcək məbləğ: <span className="final-price"> &nbsp; 0 TL</span>
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
