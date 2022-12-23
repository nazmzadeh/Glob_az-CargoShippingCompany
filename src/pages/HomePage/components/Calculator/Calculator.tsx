import './Calculator.scss';
import { CustomSelect, ISelectItem } from '../Calculator/components/CustomSelect/CustomSelect';
import { Title } from '../../../../components/TitleofSection/Title';
// import airplaneImg from '../Calculator/images/calculator.png';
import { Calculate } from './Calculate';
import { CalculatorButton } from './components/CalculatorButton';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { ValuePrinter } from './components/ValuePrinter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { changeResult } from '../../redux/homePageSlice';

const options = [{ value: 'Türkiyə', label: 'Türkiyə' }];
const units = [
  { value: 'kg', label: 'kg' },
  { value: 'g', label: 'g' },
];
export type CalculateFormData = {
  country: ISelectItem;
  length: number;
  width: number;
  height: number;
  unitWeight: ISelectItem;
  weight: number;
};

export const Calculator = () => {
  const calculatorState = useSelector((state: RootState) => state.homePage);
  const dispatch = useDispatch();
  const calculateHandler = () => dispatch(setCalculationResult());
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CalculateFormData>();

  const onSubmit: SubmitHandler<CalculateFormData> = (data) => {
    dispatch(
      changeResult(
        Calculate(
          data.length,
          data.width,
          data.height,
          data.weight,
          data.unitWeight.value,
          data.country.value,
        ),
      ),
    );
  };
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
              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <CustomSelect options={options} label="Ölkə:" {...field} />}
              />
              {errors.country && <p className="errorMsg">Ölkəni seçin..</p>}
              <div className="volume_components">
                <label>
                  <span>Uzunluq (sm):</span>
                  <input
                    type="text"
                    className="text_input"
                    {...register('length', {
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Please enter a number',
                      },
                    })}
                  />
                  {errors.length && <p className="errorMsg">Məhsulun uzunluğunu düzgün daxil edin..</p>}
                </label>
                <label className="central">
                  <span>Eni (sm):</span>
                  <input
                    type="text"
                    className="text_input"
                    {...register('width', {
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Please enter a number',
                      },
                    })}
                  />
                  {errors.width && <p className="errorMsg">Məhsulun enini düzgün daxil edin..</p>}
                </label>
                <label>
                  <span>Hündürlük (sm):</span>
                  <input
                    type="text"
                    className="text_input"
                    {...register('height', {
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Please enter a number',
                      },
                    })}
                  />
                  {errors.height && <p className="errorMsg">Məhsulun hündürlüyünü düzgün daxil edin..</p>}
                </label>
              </div>
              <div className="weight">
                <div className="unit">
                  <Controller
                    name="unitWeight"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <CustomSelect options={units} label="Çəki vahidi " {...field} />}
                  />
                  {errors.unitWeight && <p className="errorMsg">Çəki vahidini seçin..</p>}
                </div>
                <div className="weight_container">
                  <label>
                    <span>Çəki:</span>
                    <input
                      type="text"
                      className="text_input"
                      {...register('weight', {
                        required: 'bla',
                        pattern: {
                          value: /^[0-9]+$/,
                          message: 'Please enter a number',
                        },
                      })}
                    />
                    {errors.weight && <p className="errorMsg">Çəkini daxil edin..</p>}
                  </label>
                </div>
              </div>
              <div className="calculation">
                <ValuePrinter resultValue={calculatorState.result} />
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
function setCalculationResult(): any {
  throw new Error('Function not implemented.');
}
