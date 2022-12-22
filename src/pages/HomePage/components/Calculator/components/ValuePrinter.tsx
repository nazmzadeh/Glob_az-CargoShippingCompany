import {Calculate} from '../Calculate';
import { useState } from 'react';
interface IValuePrinterProps{
  resultValue: number;
}
export const ValuePrinter = (props: IValuePrinterProps) => {
  const { resultValue } = props;
  return (
    <div className="result">
      <span>$ {resultValue}</span>;
    </div>
  );
};
