import React, { useState, forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import Select from 'react-select';

import './CustomSelect.scss';

interface ISelectProps extends ControllerRenderProps {
  label: string;
  options: ISelectItem[];
}
export interface ISelectItem {
  value: string;
  label: string;
}

export const ControllerComponent = (props: ISelectProps) => {
  const { options, label, onChange, value } = props;

  return (
    <div className="custom_select">
      <label>{label}</label>
      <Select
        defaultValue={value}
        options={options}
        onChange={onChange}
        isMulti={false}
        classNamePrefix="select"
        classNames={{
          option: (state) => (state.isFocused ? 'item-focused' : state.isSelected ? 'item-selected' : ''),
        }}
      />
    </div>
  );
};

export const CustomSelect = forwardRef(ControllerComponent);
