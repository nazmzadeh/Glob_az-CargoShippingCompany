/* eslint-disable prettier/prettier */
interface IButtonProps{
    onCalculate:() => void;
}
// eslint-disable-next-line unused-imports/no-unused-vars
export const CalculatorButton = (props:IButtonProps) => {
    const {onCalculate}=props;
  return (
    <button type="submit" onClick={onCalculate}>
      Hesabla
    </button>
  );
};
