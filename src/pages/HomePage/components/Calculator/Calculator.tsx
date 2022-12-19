import './Calculator.scss';
import { CustomSelect } from '../Calculator/components/CustomSelect/CustomSelect';
import { Title } from '../TitleofSection/Title';
// import airplaneImg from '../Calculator/images/calculator.png';
import { FormEvent, useState } from 'react';
import { CalculatorButton } from './components/CalculatorButton';
import { ValuePrinter } from './components/ValuePrinter';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const options = [{ value: 'Türkiyə', label: 'Türkiyə' }];
const units = [
  { value: 'kq', label: 'kq' },
  { value: 'q', label: 'q' },
];
type CalculateFormData = {
  country: string;
  length: string;
  width: string;
  height: string;
  unitWeight: string;
  weight: string;
};

export const Calculator = () => {
  const { register, handleSubmit, control } = useForm<CalculateFormData>();

  const onSubmit: SubmitHandler<CalculateFormData> = (data) => console.log(data);

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const [result, setResult] = useState(0);
  // const onCalculate = (length: number, width: number, height: number) => {
  //   let lastResult = 0;
  //   let physicalWeight = 0;
  //   const volumetricWeight = length * width * height;
  //   if (length >= 60 || width >= 60 || height >= 60) {
  //     lastResult = volumetricWeight + physicalWeight;
  //   }
  //   // else{

  //   // }

  //   setResult(result + 1);
  // };
  return (
    <section id="calculator">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <Controller
                  render={(field) => <CustomSelect options={options} {...field} label="Ölkə:"  />}
                  name="country"
                  control={control}
                  rules={{
                    required: true,
                  }}
                /> */}
              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={(props) => <CustomSelect options={options} label="Ölkə:" {...props} />}
              />

              <div className="volume_components">
                <label>
                  <span>Uzunluq (sm):</span>
                  <input type="text" className="text_input" {...register('length', { required: true })} />
                </label>
                <label className="central">
                  <span>Eni (sm):</span>
                  <input type="text" className="text_input" {...register('width', { required: true })} />
                </label>
                <label>
                  <span>Hündürlük (sm):</span>
                  <input type="text" className="text_input" {...register('height', { required: true })} />
                </label>
              </div>
              <div className="weight">
                <CustomSelect
                  options={units}
                  label="Çəki vahidi "
                  {...register('unitWeight', { required: true })}
                />
                <div className="weight_container">
                  <label>
                    <span>Çəki:</span>
                    <input type="text" className="text_input" {...register('weight', { required: true })} />
                  </label>
                </div>
              </div>
              <div className="calculation">
                <ValuePrinter resultValue={result} />
                <CalculatorButton />
              </div>
            </form>
          </div>
          <img src={require('./images/calculator.png')} alt="airplane" />
        </div>
      </div>
    </section>
  );
};
