/* eslint-disable jsx-a11y/anchor-is-valid */
import './AccountPhoneButton.scss';

export const AccountPhoneButton = () => {
  return (
    <>
      <div className="flex space-between account-btn-group mobile-show">
        <a href="/parcel/create?lang=az" className="btn btn-green order-btn" title="">
          Bəyan et
        </a>
        <a href="/links/create?lang=az" className="btn btn-orange order-btn" title="">
          <span className="no-wrap">+ Sifariş</span> et
        </a>
      </div>
    </>
  );
};
