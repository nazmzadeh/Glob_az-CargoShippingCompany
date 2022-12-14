import './Header.scss';
import { Link } from 'react-router-dom';
import { LogInUserPayload, logInUser } from '../../app/currentUserSlice';
import { RootState } from '../../app/store';
import { UserResponse } from '../../models/UserResponse';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.png';
import phone from './phone.svg';

export const Header = () => {
  const currentUserState = useSelector((state: RootState) => state.currentUser);
  const dispatch = useDispatch();
  const user: UserResponse = {
    avatar: '',
    email: '',
    firstName: 'Rafael',
    lastName: 'Nagiyev',
    id: 5,
  };
  const payload: LogInUserPayload = { user: user };
  const emulateLogIn = () => dispatch(logInUser(payload));

  return (
    <header className="header header-inside">
      <div className="topHeader">
        <div className="container">
          <div className="header-top-inside">
            <div className="headerTopLeft">
              <select className="langOpt" id="lang">
                <option value="AZ">AZ</option>
                <option value="RU">RU</option>
                <option value="ENG">ENG</option>
              </select>
              <div className="header-phone">
                <img src={phone} alt="" />
                <a href="tel:+994 12 525 9001" title="">
                  +994 12 525 9001
                </a>
                <a href="tel:+994 50 833 9010" title="">
                  +994 50 833 9010
                </a>
                <a href="tel:+994 99 833 9010" title="">
                  +994 99 833 9010
                </a>
              </div>
            </div>
            <button onClick={emulateLogIn}>TestButton</button>
            <div className="header-top-right">
              {currentUserState.currentUser ? (
                <div>
                  {currentUserState.currentUser.firstName}
                  {currentUserState.currentUser.lastName}
                </div>
              ) : (
                <>
                  <Link to="account-page" className="inline cboxElement">
                    Daxil ol
                  </Link>
                  <span className="random">/</span>
                  <a href="/az/signup.html" title="">
                    Qeydiyyat
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bottomHeader">
        <div className="container">
          <div className="header-btm-inside">
            <div className="header-logo">
              <a href="#/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="headerMenu desktopOnly">
              <ul className="headerList">
                <li>
                  <Link to={'tarifler'}>Tariflər</Link>
                </li>
                <li>
                  <Link to={'Magazalar'}>Mağazalar</Link>
                </li>
                <li>
                  <Link to={'Faq'}>Faq</Link>
                </li>
                <li>
                  <Link to={'Əlaqə'}>Əlaqə</Link>
                </li>
                <li>
                  <Link to={'Mexfilik'}>Məxfilik</Link>
                </li>
              </ul>
              {currentUserState.currentUser && <div>bbutton button button</div>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
