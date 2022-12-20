import './OrderingPart.scss';
import { OrderingForm } from '../OrderingForm/OrderingForm';
import { useState } from 'react';

export interface Good {
  title: string;
  url: string;
  price: number;
  count: number;
  color: string;
  size: string;
  isUrgent: boolean;
}

export const OrderingPart = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const onRemoveGood = (blockIndex: number) => {
    setGoods(goods.filter((_, index) => index !== blockIndex));
  };

  return (
    <>
      <div className="sifaris">
        <div className="sifarish-top">
          <h4>Sifariş et</h4>
        </div>
        {goods.map((item, index) => (
          <OrderingForm
            key={index}
            blockCount={index + 1}
            {...item}
            onRemoveGood={() => onRemoveGood(index)}
          />
        ))}
        <div className="sifaris-bottom">
          <button
            className="add-product"
            onClick={() => {
              setGoods([
                ...goods,
                { title: '', url: '', price: 0, count: 0, color: '', size: '', isUrgent: false },
              ]);
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
