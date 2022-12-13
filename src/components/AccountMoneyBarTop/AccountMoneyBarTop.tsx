/* eslint-disable jsx-a11y/anchor-is-valid */
import './AccountMoneyBarTop.scss';

export const AccountMoneyBarTop = () => {
  return (
    <>
      <div className="account-showcase row desktop-show">
        <div className="col-md-4">
          <a href="#" className="account-showcase-shopping" title="">
            Cari ay üzrə limit <span className="account-showcase-count">0 $</span>
          </a>
        </div>
        <div className="col-md-4">
          <a href="/balance/index?type=shipping&amp;lang=az" className="account-showcase-balance" title="">
            Daşınma Balansım <span className="account-showcase-count">0.01 AZN</span>
          </a>
        </div>

        <div className="col-md-4">
          <a href="/balance/index?type=order&amp;lang=az" className="account-showcase-parcel" title="">
            Sifariş Balansım <span className="account-showcase-count">0.00 TRY</span>
          </a>
        </div>
      </div>
    </>
  );
};
