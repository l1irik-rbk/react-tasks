import React from 'react';
import { SelectPaginationProps } from '../../../helpers/TypeScript/types';

const PaginationSort = ({ changePaginationValue, paginationSortValue }: SelectPaginationProps) => {
  const onChangeSortValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changePaginationValue(+e.target.value);
  };

  return (
    <div className="col">
      <select
        className="form-select pagination-select"
        onChange={onChangeSortValue}
        value={paginationSortValue}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
};

export default PaginationSort;
