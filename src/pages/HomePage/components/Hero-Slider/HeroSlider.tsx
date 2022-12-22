/* eslint-disable jsx-a11y/anchor-is-valid */
import './HeroSlider.scss';
import Slider, { Nav, Overlay, Slide } from 'hero-slider';
import Subtitle from './components/Subtitle/Subtitle';
import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';

export interface ISlide {
  id: number;
  title: string;
  subtitle: string;
  caption: string;
  imageSrc: string;
}
export interface IHeroSliderProps {
  slides: ISlide[];
}
export const HeroSlider = (props: IHeroSliderProps) => {
  const { slides } = props;
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
          {slides.map((slide, i) => (
            <Slide key={slide.id} className="sld">
              <Wrapper>
                <div className="summary">
                  <Title>{slide.title}</Title>
                  <Subtitle>{slide.subtitle}</Subtitle>
                  <div className="slider_caption">
                    <a href="#">{slide.caption}</a>
                  </div>
                </div>
                <a href="#">
                  <img src={slide.imageSrc} alt="slide" srcSet={slide.imageSrc}></img>
                </a>
              </Wrapper>
            </Slide>
          ))}
        </Overlay>
        <Nav />
      </Slider>
    </section>
  );
};
