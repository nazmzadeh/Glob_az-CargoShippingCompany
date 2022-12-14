import './Calculator.scss';
import { CustomSelect } from '../Calculator/components/CustomSelect/CustomSelect';
import { Title } from '../TitleofSection/Title';
// import airplaneImg from '../Calculator/images/calculator.png';
import { FormEvent, useRef, useState } from 'react';
import { CalculatorButton } from './components/CalculatorButton';
import { ValuePrinter } from './components/ValuePrinter';



const options = [{ value: 'Türkiyə', label: 'Türkiyə' }];
const units = [
  { value: 'kq', label: 'kq' },
  { value: 'q', label: 'q' },
];

export const Calculator = () => {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const lengthRef = useRef<HTMLInputElement>(null);
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  
  const [result, setResult] = useState(0);
  const onCalculate = (length: number, width: number, height: number) => {
    let lastResult = 0;
    let physicalWeight=0;
    const volumetricWeight = length * width * height;
    if (length >= 60 || width >= 60 || height >= 60) {
      lastResult = volumetricWeight + physicalWeight;
    }
    else{

    }

    setResult(result + 1);

  };
  return (
    <section id="calculator" data-aos>
      <div className="myContainer">
        <Title value="KALKULYATOR" isWhite />
        <div className="summary">
          <p>
            Hər hansı bir uzunluq gösətiricisi 60 sm və 60 sm-dən artıq olan bağlamaların daşınma haqqı həm
            həcm çəkisi, həm də fiziki çəkisi hesablanacaq, hansı çəki göstəricisi daha çox olarsa, daşınma
            haqqı o çəki əsasında hesablanacaqdır. En (sm) x Uzunluq (sm) x Hündürlük (sm)/6000 = Həcm çəkisi
            (kq)
          </p>
        </div>
        <div className="flex-row">
          <div className="form-container">
            <p>Ölkə, çəki məlumatlarını daxil edin və HESABLA düyməsinə sıxın.</p>
            <form onSubmit={handleSubmit}>
              <CustomSelect options={options} label="Ölkə:" />
              <div className="volume_components">
                <label>
                  Uzunluq (sm):
                  <input type="text" name="length" className="text_input" ref={lengthRef} />
                </label>
                <label className="central">
                  Eni (sm):
                  <input type="text" name="width" className="text_input" ref={widthRef} />
                </label>
                <label>
                  Hündürlük (sm):
                  <input type="text" name="height" className="text_input" ref={heightRef} />
                </label>
              </div>
              <div className="weight">
                <CustomSelect options={units} label="Çəki vahidi " />
                <div className="weight_container">
                  <label>
                    Çəki:
                    <input type="text" name="weight" className="text_input" ref={weightRef}/>
                  </label>
                </div>
              </div>
              <div className="calculation">
                <ValuePrinter resultValue={result}/>
                <CalculatorButton onCalculate={onCalculate}/>
              </div>
            </form>
          </div>
          <img src={require('./images/calculator.png')} alt="airplane" />
        </div>
      </div>
    </section>
  );
};
