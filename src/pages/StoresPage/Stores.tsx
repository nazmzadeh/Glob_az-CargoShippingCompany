/* eslint-disable prettier/prettier */
import './Stores.scss';
import { StoresPart } from './components/StoresPart/StoresPart';
import { StoresSideNavBar } from './components/StoresSideNavBar/StoresSideNavBar';
import { StoresTop } from './components/StoresTop/StoresTop';

export const Stores = () => {
  return <body className='body-inside'>
  <div className="container">
  <StoresTop />
  <section className="faq">

  <div className="col-md-3 col-xs-12 store-sidebar"> 
  <StoresSideNavBar />

  </div>
  <div className="col-md-9 col-xs-12 store-main">

  <StoresPart />
  </div>

  </section>
  </div>
  <div className="desktop-show">
	<br/><br/><br/><br/><br/><br/><br/><br/>
</div>
  </body>
  ;
};
