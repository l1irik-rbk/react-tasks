import React from 'react';
import { ValidationErrorProps } from '../../../helpers/TypeScript/types';

const ValidationError = ({ errorMessage }: ValidationErrorProps) => {
  return (
    <div className="alert alert-danger" role="alert" data-testid="error-message">
      {errorMessage}
    </div>
  );
};

export default ValidationError;
