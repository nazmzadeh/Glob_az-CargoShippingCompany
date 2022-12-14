/* eslint-disable prettier/prettier */
import './AccountSideBarTop.scss';
import avatar from './6241b9bf092981648474559.jpg';

export const SideNavBarTop = () => {
  return (
    <>
      <div className="account-sidebar-top flex align-items-center">
        <div className="account-img">
          <img src={avatar} alt="" />
        </div>
        <div className="account-name">
          <h4>Kerim Alekberov</h4>
          <p>Müştəri kodu: U36</p>
        </div>
      </div>
      <div className="limit-notification mobile-show">
        <a href="/balance/index?type=shipping&amp;lang=az" title="">
          AZN balans: 0.01 AZN
        </a>
        <a href="/balance/index?type=order&amp;lang=az" title="">
          TL balans: 0 TL
        </a>
        <a href="/" title="">
          Cari ay üzrə limit: 0$
        </a>
      </div>
    </>
  );
};
