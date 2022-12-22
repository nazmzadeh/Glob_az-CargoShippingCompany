import './Cart.scss';
import { Link } from 'react-router-dom';

export const Cart = () => {
  return (
    <div className="cart-main-div">
      <div className="cart-header">
        <span className="cart-label">Səbətim</span>
        <Link to="/account-page/ordering-part" className="btn-link btn-sifarish desktop-only">
          <span className="no-wrap">+ Sifariş</span> et
        </Link>
      </div>
      <div className="cart-content">
        <span className="cart-text">Hazırda səbətinizdə heç bir məhsul yoxdur.</span>
      </div>
    </div>
  );
};
