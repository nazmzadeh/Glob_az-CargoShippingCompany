/* eslint-disable prettier/prettier */
import './Home.scss';
import { Calculator } from './components/Calculator/Calculator';
import { HeroSlider, ISlide } from './components/Hero-Slider/HeroSlider';
import { News } from './components/News/News';
import { Shops } from './components/Shops/Shops';
import { Step } from './components/Step/Step';
import slideImg1 from './components/Hero-Slider/images/sliderglobbi.png';
import slideImg2 from './components/Hero-Slider/images/tetbiq.png';

export const Home = () => {
  let slideItems: ISlide[] = [
    {
      id: 1,
      title: 'Globbi Sizi salamlayır!',
      subtitle: 'Peşəkar komandamızla xidmətinizdəyik.',
      caption:
        'Globbinin boyu o qədər uzundur ki, Sizin problemlərinizi vaxtında görəcək və məmnuniyyətiniz üçün problemlərinizi tez bir zamanda həll edəcək.',
      imageSrc: slideImg1,
    },
    {
      id: 2,
      title: 'Artıq hər kəs üçün tətbiqimiz var!',
      subtitle: 'Peşəkar komandamızla xidmətinizdəyik.',
      caption: 'İOS və ANDROİD istifadəçiləri üçün',
      imageSrc: slideImg2,
    },
  ];
  return (
    <>
      <HeroSlider slides={slideItems} />
      <Step />
      <Calculator />
      <News />
      <Shops />
    </>
  );
};
