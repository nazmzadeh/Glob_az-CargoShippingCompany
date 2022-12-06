import "./HeroSlider.scss";
import Slider, { Slide, Nav, Overlay } from "hero-slider";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import Subtitle from "./components/Subtitle/Subtitle";
import slideImg1 from "./images/sliderglobbi.png";
import slideImg2 from "./images/tetbiq.png";

export interface ISlide {
  id: number;
  title: string;
  subtitle: string;
  caption: string;
  imageSrc: string;
}
export interface IHeroSliderProps {
  slides: ISlide[]
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
            <Slide
              style={{
                backgroundImage: "linear-gradient(#ff7700, #ffa600)",
              }}
            >
              <Wrapper>
                <div className="summary">
                  <Title>{slide.title}</Title>
                  <Subtitle>{slide.subtitle}</Subtitle>
                  <div className="slider_caption">
                    <a href="#">
                    {slide.caption}
                    </a>
                  </div>
                </div>
                <img src={slide.imageSrc} alt="slide_image" srcSet={slide.imageSrc}></img>
              </Wrapper>
            </Slide>
          ))}

        </Overlay>
        <Nav />
      </Slider>
    </section>
  );
};
