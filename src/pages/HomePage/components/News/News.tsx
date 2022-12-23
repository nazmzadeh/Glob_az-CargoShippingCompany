/* eslint-disable unused-imports/no-unused-vars */
// import './News.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Title from '../../../../components/TitleofSection/Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { useEffect } from 'react';
import { baseUrl } from '../../../../constants';
import { setNews, homePageSlice } from '../../redux/homePageSlice';
import { CCard, CCardBody, CCardImage, CCardTitle, CCol, CRow } from '@coreui/react';
let links: string[] = ['trench-coat', 'ushaq-geyimleri', 'idman-geyimleri'];
export const News = () => {
  const homePageState = useSelector((state: RootState) => state.homePage);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseUrl}/news`)
      .then((response) => response.json())
      .then((data) => dispatch(setNews({ news: data })));
  }, []);
  return (
    <section id="news" className="news">
      <div className="title">
        <Title value="XƏBƏRLƏR" isWhite={false} />
      </div>
      <div className="cards_container myContainer">
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {homePageState.news.slice(0, 3).map((card) => (
            <CCol xs key={card.id} className="col">
              <CCard className="h-100 card">
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
        <div className="all_news">
          <Link to="all-news" className="link_all_news">
            Bütün xəbərlər
          </Link>
        </div>
      </div>
    </section>
  );
};
