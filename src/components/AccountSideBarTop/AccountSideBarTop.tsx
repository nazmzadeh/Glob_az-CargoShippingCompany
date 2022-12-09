import avatar from './6241b9bf092981648474559.jpg';
import './AccountSideBarTop.scss';

export const SideNavBarTop = () => {
    return (
        <div className="account-sidebar-top flex align-items-center">
        <div className="account-img">
            <img src= {avatar} alt="" />
        </div>
        <div className="account-name">
                        <h4>Kerim Alekberov</h4>
            <p>Müştəri kodu: U36</p>
        </div>
    </div>
    );
  };
  