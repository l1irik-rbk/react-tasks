import React from 'react';
import { ValidationErrorProps } from '../../../helpers/TypeScript/types';

class ValidationError extends React.Component<ValidationErrorProps> {
  render() {
    return (
      <div className="alert alert-danger" role="alert">
        {this.props.errorMessage}
      </div>
    );
  }
}

export default ValidationError;
