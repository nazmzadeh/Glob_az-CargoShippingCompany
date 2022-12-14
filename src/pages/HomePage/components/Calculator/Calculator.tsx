import './Calculator.scss';
import { CustomSelect } from '../Calculator/components/CustomSelect/CustomSelect';
import { Title } from '../TitleofSection/Title';
// import airplaneImg from '../Calculator/images/calculator.png';
import { useState } from 'react';
const options = [{ value: 'Türkiyə', label: 'Türkiyə' }];
const units = [
  { value: 'kq', label: 'kq' },
  { value: 'q', label: 'q' },
];

export const Calculator = () => {
  const [result, setResult] = useState(0);
  
  // const handleSubmit = event => {

  //   event.preventDefault();

  // const calculate = () => {
  //   setResult(result + 1);
  // };
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
            <form>
              <CustomSelect options={options} label="Ölkə:" />
              <div className="volume_components">
                <label>
                  Uzunluq (sm):
                  <input type="text" name="length" className="text_input" />
                </label>
                <label className="central">
                  Eni (sm):
                  <input type="text" name="width" className="text_input" />
                </label>
                <label>
                  Hündürlük (sm):
                  <input type="text" name="height" className="text_input" />
                </label>
              </div>
              <div className="weight">
                <CustomSelect options={units} label="Çəki vahidi " />
                <div className="weight_container">
                  <label>
                    Çəki:
                    <input type="text" name="weight" className="text_input" />
                  </label>
                </div>
              </div>
              <div className="calculation">
                <div className="result">
                  <span >$ 0.00</span>
                </div>
                <button type='submit'>Hesabla</button>
              </div>
            </form>
          </div>
          <img src={require('./images/calculator.png')} alt="airplane" />
        </div>
      </div>
    </section>
  );
};
