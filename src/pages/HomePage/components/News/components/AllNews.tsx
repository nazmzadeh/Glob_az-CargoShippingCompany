import '../News.scss';
import { CCard, CCardBody, CCardImage, CCardTitle, CCol, CRow } from '@coreui/react';
import React, { useEffect } from 'react';
import Title from '../../../../../components/TitleofSection/Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../app/store';
import { setNews } from '../../../redux/homePageSlice';
import { baseUrl } from '../../../../../constants';
import { Link } from 'react-router-dom';

export const AllNews = () => {
  const homePageState = useSelector((state: RootState) => state.homePage);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseUrl}/news`)
      .then((response) => response.json())
      .then((data) => dispatch(setNews({ news: data })));
  }, []);
  return (
    <section id="news" className="news">
      <div className="cards_container myContainer">
        <div className="title">
          <Title value="XƏBƏRLƏR" isWhite={false} />
        </div>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {homePageState.news.map((card) => (
            <CCol xs key={card.id}>
              <CCard className="h-100">
                <Link to={card.page}>
                  <CCardImage orientation="top" src={card.imageSrc} />
                </Link>
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
