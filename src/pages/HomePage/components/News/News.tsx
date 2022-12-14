import './News.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from '../../../../components/TitleofSection/Title';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cardImg1 from './images/Trenchcoat-BLOG.jpg';
import cardImg2 from './images/Usaq-geyimlerinin-sifarisiBLOG.jpg';
import cardImg3 from './images/Blog-Slide-01-1.jpg';
export const News = () => {
  return (
    <section id="news">
      <div className="cards_container myContainer">
        <div className="title">
          <Title value="XƏBƏRLƏR" isWhite={false} />
        </div>
        <CardGroup className="cards">
          <Card className="card">
            <Card.Body className="card_body">
              <a href="Home">
                <Card.Img src={cardImg1} alt="card-main" />
              </a>
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                <a href="Home">Türkiyədən trençkot sifarişi</a>
              </Card.Text>
              <small className="text-muted">10.10.2022</small>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Body className="card_body">
              <a href="Home">
                <Card.Img src={cardImg2} alt="card-main" />
              </a>
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                <a href="Home">Türkiyədən uşaq geyimlərinin sifarişi</a>
              </Card.Text>
              <small className="text-muted">10.10.2022</small>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Body className="card_body">
              <a href="Home">
                <Card.Img src={cardImg3} alt="card-main" />
              </a>
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                <a href="Home">Trendyoldan idman geyimlərinin sifarişi</a>
              </Card.Text>
              <small className="text-muted">22.09.2022</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <div className="all_news">{/* <a href="">Bütün xəbərlər</a> */}</div>
      </div>
    </section>
  );
};
