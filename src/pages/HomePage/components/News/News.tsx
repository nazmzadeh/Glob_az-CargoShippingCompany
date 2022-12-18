// import './News.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Title from '../../../../components/TitleofSection/Title';
import cardImg1 from './images/Trenchcoat-BLOG.jpg';
import cardImg2 from './images/Usaq-geyimlerinin-sifarisiBLOG.jpg';
import cardImg3 from './images/Blog-Slide-01-1.jpg';
import { Link } from 'react-router-dom';
import { AllNews } from './components/AllNews';
import { CCard, CCardBody, CCardImage, CCardTitle, CCol, CRow } from '@coreui/react';

export interface ICard {
  id: number;
  header: string;
  date: string;
  imageSrc: string;
}
export interface ICards {
  cards: ICard[];
}
export const News = (props: ICards) => {
  const { cards } = props;
  return (
    <section id="news" className="news">
      <div className="cards_container myContainer">
        <div className="title">
          <Title value="XƏBƏRLƏR" isWhite={false} />
        </div>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {cards.slice(0, 3).map((card) => (
            <CCol xs key={card.id} className="col">
              <CCard className="h-100 card">
                <a href="/">
                  <CCardImage orientation="top" src={card.imageSrc} />
                </a>
                <CCardBody className="body">
                  <CCardTitle className="header">{card.header}</CCardTitle>
                  <small className="text-medium-emphasis">{card.date}</small>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
        <div className="all_news">
          <Link to="all-news" className="link_all_news">
            Bütün xəbərlər
          </Link>
        </div>
      </div>
    </section>
  );
};
