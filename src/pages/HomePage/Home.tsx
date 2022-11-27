import { Calculator } from './components/Calculator/Calculator';
import { HeroSlider } from './components/Hero-Slider/HeroSlider';
import { News } from './components/News/News';
import { Shops } from './components/Shops/Shops';
import { Step } from './components/Step/Step';
import './Home.scss'

export const Home=()=>{
  return(
    <>
    <HeroSlider/>
    <Step/>
    <Calculator/>
    <News/>
    <Shops/>
    </>
  );
}