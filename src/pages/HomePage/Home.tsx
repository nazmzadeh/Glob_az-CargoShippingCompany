import './Home.scss';
import { Calculator } from './components/Calculator/Calculator';
import { HeroSlider, ISlide } from './components/Hero-Slider/HeroSlider';
import { ICard, News } from './components/News/News';
import { Shops } from './components/Shops/Shops';
import { Step } from './components/Step/Step';
import slideImg1 from './components/Hero-Slider/images/sliderglobbi.png';
import slideImg2 from './components/Hero-Slider/images/tetbiq.png';
import cardImg1 from './components/News/images/Trenchcoat-BLOG.jpg';
import cardImg2 from './components/News/images/Usaq-geyimlerinin-sifarisiBLOG.jpg';
import cardImg3 from './components/News/images/Blog-Slide-01-1.jpg';
import cardImg4 from './components/News/components/images/b2.jpg';
import cardImg5 from './components/News/components/images/b3-1.jpg';
import cardImg6 from './components/News/components/images/b1-1.jpg';
import cardImg7 from './components/News/components/images/Untitled-3.png';
import { AllNews } from './components/News/components/AllNews';

export const cards: ICard[] = [
  {
    id: 1,
    header: 'Türkiyədən trençkot sifarişi',
    date: '10.10.2022',
    imageSrc: cardImg1,
  },
  {
    id: 2,
    header: 'Türkiyədən uşaq geyimlərinin sifarişi',
    date: '10.10.2022',
    imageSrc: cardImg2,
  },
  {
    id: 3,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: cardImg3,
  },
  {
    id: 4,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: cardImg4,
  },
  {
    id: 5,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: cardImg5,
  },
  {
    id: 6,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: cardImg6,
  },
  {
    id: 7,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: cardImg7,
  },
];
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
      <News cards={cards} />
      <Shops />
    </>
  );
};
