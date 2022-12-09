import './Calculator.scss';
import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { Title } from '../TitleofSection/Title';
export const Calculator = () => {
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
        {/* <div className="flex-row"> */}
        <div className="form-container">
          <FormControl  className="form">
            <InputLabel id="demo-simple-select-label"> Ölkə:</InputLabel >
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="country">
              <MenuItem value={10}>Türkiyə</MenuItem>
              <MenuItem value={20}>Amerika</MenuItem>
            </Select>
          </FormControl>
        </div>

        <input type="submit" value="Submit" />
        {/* </div> */}
      </div>
    </section>
  );
};
