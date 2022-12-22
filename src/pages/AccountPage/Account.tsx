import './Account.scss';
import { AccountMoneyBarTop } from '../../components/AccountMoneyBarTop/AccountMoneyBarTop';
import { Beyan } from '../../components/BeyanEtPart/Beyan';
import { OrderingPart } from '../../components/OrderingPage/OrderingPart';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { SideNavBar } from '../../components/SideNavBar/SideNabBar';
import { SideNavBarTop } from '../../components/AccountSideBarTop/AccountSideBarTop';
import { AccountPhoneButton } from '../../components/AccountPhoneButton/AccountPhoneButton';

export const AccountPage = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="row">
          <div className="col-md-3 account-sidebar">
            <SideNavBarTop />
            <AccountPhoneButton />
            <SideNavBar />
          </div>
          <div className="col-md-9 account-main">
            <AccountMoneyBarTop />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
