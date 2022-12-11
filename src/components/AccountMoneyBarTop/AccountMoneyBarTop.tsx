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
      <div className="limit-notification mobile-show">
        <a href="/balance/index?type=shipping&amp;lang=az" title="">
          AZN balans: 0.01 AZN
        </a>
        <a href="/balance/index?type=order&amp;lang=az" title="">
          TL balans: 0 TL
        </a>
        <a href="#" title="">
          Cari ay üzrə limit: 0$
        </a>
      </div>
    </>
  );
};
