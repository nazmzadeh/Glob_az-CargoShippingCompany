import '../News.scss';
import { CCard, CCardBody, CCardImage, CCardTitle, CCol, CRow } from '@coreui/react';
import React from 'react';
import Title from '../../../../../components/TitleofSection/Title';

export interface ICard {
  id: number;
  header: string;
  date: string;
  imageSrc: string;
}
export interface ICards {
  cards: ICard[];
}
export const AllNews = (props: ICards) => {
  const { cards } = props;
  return (
    <section id="news" className="news">
      <div className="cards_container myContainer">
        <div className="title">
          <Title value="XƏBƏRLƏR" isWhite={false} />
        </div>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {cards.map((card) => (
            <CCol xs key={card.id}>
              <CCard className="h-100">
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
      </div>
    </section>
  );
};
