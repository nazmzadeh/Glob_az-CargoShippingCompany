import React, { useState } from 'react';
import Select from 'react-select';

import './CustomSelect.scss';

interface ISelectProps {
  label: string;
  options: ISelectItem[];
}
interface ISelectItem {
  value: string;
  label: string;
}

export const CustomSelect = (props: ISelectProps) => {
  const { options, label } = props;
  const [selectedOption, setSelectedOption] = useState<ISelectItem | null>();

  return (
    <div className="custom_select">
      <label>{label}</label>
      <Select
        defaultValue={selectedOption}
        options={options}
        onChange={setSelectedOption}
        isMulti={false}
        classNamePrefix="select"
        classNames={{
          option: (state) => (state.isFocused ? 'item-focused' : state.isSelected ? 'item-selected' : ''),
        }}
      />
    </div>
  );
};
