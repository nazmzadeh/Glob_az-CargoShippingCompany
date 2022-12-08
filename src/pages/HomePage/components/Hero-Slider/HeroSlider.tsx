/* eslint-disable jsx-a11y/anchor-is-valid */
import './HeroSlider.scss';
import Slider, { Nav, Overlay, Slide } from 'hero-slider';
import Subtitle from './components/Subtitle/Subtitle';
import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';
import slideImg1 from './images/sliderglobbi.png';
import slideImg2 from './images/tetbiq.png';

export interface ISLide {
  id: number;
  title: string;
  subTitle: string;
  caption: string;
  imageSrc: string;
}
export const HeroSlider = () => {
  return (
    <section id="hero">
      <Slider
        accessability={{
          shouldDisplayButtons: false,
        }}
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 0,
        }}
        autoplay={{
          autoplayDuration: 4000,
          autoplayDebounce: 0,
        }}
        className="hero"
      >
        <Overlay>
          <Slide
            style={{
              backgroundImage: 'linear-gradient(#ff7700, #ffa600)',
            }}
          >
            <Wrapper>
              <div className="summary">
                <Title>Globbi Sizi salamlayır!</Title>
                <Subtitle>Peşəkar komandamızla xidmətinizdəyik.</Subtitle>
                <div className="slider_caption">
                  <a href="#">
                    Globbinin boyu o qədər uzundur ki, Sizin problemlərinizi vaxtında görəcək və
                    məmnuniyyətiniz üçün problemlərinizi tez bir zamanda həll edəcək.
                  </a>
                </div>
              </div>
              <img src={slideImg1} alt="bla" srcSet={slideImg1}></img>
            </Wrapper>
          </Slide>

          <Slide
            style={{
              backgroundImage: 'linear-gradient(#ff7700, #ffa600)',
            }}
          >
            <Wrapper>
              <div className="summary">
                <Title>Artıq hər kəs üçün tətbiqimiz var!</Title>
                <Subtitle>İOS və ANDROİD istifadəçiləri üçün</Subtitle>
                <div className="slider_caption">
                  <a href="#">Ətraflı məlumat üçün klik edin..</a>
                </div>
              </div>
              <img src={slideImg2} alt="bla" srcSet={slideImg2}></img>
            </Wrapper>
          </Slide>
        </Overlay>
        <Nav />
      </Slider>
    </section>
  );
};
