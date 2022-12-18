import './Account.scss';
import { AccountMoneyBarTop } from '../../components/AccountMoneyBarTop/AccountMoneyBarTop';
import { OrderingPart } from '../../components/OrderingPage/OrderingPart';
import { SideNavBar } from '../../components/SideNavBar/SideNabBar';
import { SideNavBarTop } from '../../components/AccountSideBarTop/AccountSideBarTop';

export const AccountPage = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="row">
          <div className="col-md-3 account-sidebar">
            <SideNavBarTop />
            <SideNavBar />
          </div>
          <div className="col-md-9 account-main">
            <AccountMoneyBarTop />
            <OrderingPart />
          </div>
        </div>
      </div>
    </div>
  );
};
