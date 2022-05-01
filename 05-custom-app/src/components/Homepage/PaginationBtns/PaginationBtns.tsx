import React from 'react';
import { PaginationBtnsProps } from '../../../helpers/TypeScript/types';

const PaginationBtns = ({ page, currentPage, disabled, changePage }: PaginationBtnsProps) => {
  return (
    <li
      className={page === currentPage ? 'page-item active' : 'page-item'}
      aria-current="page"
      onClick={() => changePage(page)}
    >
      <button className="page-link" disabled={disabled}>
        {page}
      </button>
    </li>
  );
};

export default PaginationBtns;
