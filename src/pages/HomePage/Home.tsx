import { Calculator } from './components/Calculator/Calculator';
import { HeroSlider } from './components/Hero-Slider/HeroSlider';
import { News } from './components/News/News';
import { Shops } from './components/Shops/Shops';
import { Step } from './components/Step/Step';
import slideImg1 from "./components/Hero-Slider/images/sliderglobbi.png";
import slideImg2 from "./components/Hero-Slider/images/tetbiq.png";
import './Home.scss'

export const Home=()=>{
    let slideItems = [
    { id: 1, title: "Globbi Sizi salamlayır!",subTitle:'Peşəkar komandamızla xidmətinizdəyik.',caption: "Globbinin boyu o qədər uzundur ki, Sizin problemlərinizi vaxtında görəcək və məmnuniyyətiniz üçün problemlərinizi tez bir zamanda həll edəcək.",imageSrc:slideImg1 },
    { id: 2, title: "Artıq hər kəs üçün tətbiqimiz var!",subTitle:'Peşəkar komandamızla xidmətinizdəyik.',caption: 'İOS və ANDROİD istifadəçiləri üçün',imageSrc:slideImg2 },
  ];
  return(
    <>
    <HeroSlider />
    <Step/>
    <Calculator/>
    <News/>
    <Shops/>
    </>
  );
}