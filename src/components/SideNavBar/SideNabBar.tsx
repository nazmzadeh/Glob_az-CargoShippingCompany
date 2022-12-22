import './SideNavBar.scss';
import { Link } from 'react-router-dom';
import borclar from './debt.svg';

export const SideNavBar = () => {
  return (
    <div className="account-sidebar-nav mobile">
      <ul className="desktop-show">
        <li>
          <a className="nav-address  active" href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Xaricdəki ünvanlarım{' '}
          </a>
        </li>
        <li>
          <Link className="nav-parcel" to="/account-page/packages-part">
            <img src={borclar} className="sidebar-icon" alt="" />
            Bağlamalar{' '}
          </Link>
        </li>
        <li>
          <a className="orders   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Sifarişlərim{' '}
          </a>
        </li>
        <li>
          <a className="nav-balance   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Balans{' '}
          </a>
        </li>
        <li>
          <a className="nav-balance  notify-color " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Borclar{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-referal   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Filiallar{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-referal   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Müraciətlər{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-referal   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Kuryer sifarişləri{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-referal   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Promokodlar{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-referal   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Etibarnamələr{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-referal   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Ailə hesabı{' '}
          </a>
        </li>
        <li>
          <a className="nav-account-setting   " href="/" title="">
            <img src={borclar} className="sidebar-icon" alt="" />
            Tənzimləmələr{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};
