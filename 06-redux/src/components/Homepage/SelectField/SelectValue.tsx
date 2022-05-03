import React from 'react';
import { SelectFieldProps } from '../../../helpers/TypeScript/types';

const SelectField = ({ changeSortValue, sortValue }: SelectFieldProps) => {
  const onChangeSortValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeSortValue(e.target.value);
  };

  return (
    <div className="col">
      <select className="form-select people-select" onChange={onChangeSortValue} value={sortValue}>
        <option value="" disabled>
          Select sort option
        </option>
        <option value="name">By name</option>
        <option value="mass">By mass</option>
        <option value="height">By height</option>
      </select>
    </div>
  );
};

export default SelectField;
