import { SideNavBarTop } from '../../components/AccountSideBarTop/AccountSideBarTop';
import { SideNavBar } from '../../components/SideNavBar/SideNabBar';
import './Account.scss';

export const AccountPage = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="row">
          <div className="col-md-3 account-sidebar">
            <SideNavBarTop />
            <SideNavBar />
          </div>
        </div>
      </div>
    </div>
  );
};
