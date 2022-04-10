import React from 'react';
import { ERROR_MESSAGES, MIN_LENGTH_OF_NAME, REG_EXP } from '../../../helpers/constants';
import { newCard } from '../../../helpers/TypeScript/interfaces';
import { FormpageProps, FormState } from '../../../helpers/TypeScript/types';
import ValidationError from '../ValidationError/ValidationError';

class Form extends React.Component<FormpageProps, FormState> {
  firstNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  lastNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  countryRef: React.RefObject<HTMLSelectElement> = React.createRef();
  notificationRef: React.RefObject<HTMLInputElement> = React.createRef();
  pictureRef: React.RefObject<HTMLInputElement> = React.createRef();
  acceptRef: React.RefObject<HTMLInputElement> = React.createRef();
  formRef: React.RefObject<HTMLFormElement> = React.createRef();

  constructor(props: FormpageProps) {
    super(props);
    this.state = {
      errors: {},
      submitButtonClicks: 0,
    };
  }

  validate = () => {
    this.setState({
      errors: {},
    });

    this.firstNameValidation();
    this.lastNameValidation();
    this.acceptValidation();
    this.countryValidation();
    this.pictureValidation();
    this.birthdayValidation();
  };

  firstNameValidation = () => {
    const firstNameLength = this.firstNameRef.current?.value.length as number;
    const firstNameMatch = this.firstNameRef.current?.value.match(REG_EXP);

    if (firstNameLength <= MIN_LENGTH_OF_NAME && !firstNameMatch) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, firstNameError: true },
      }));
    }
  };

  lastNameValidation = () => {
    const lastNameLength = this.lastNameRef.current?.value.length as number;
    const lastNameMatch = this.lastNameRef.current?.value.match(REG_EXP);

    if (lastNameLength <= MIN_LENGTH_OF_NAME && !lastNameMatch) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, lastNameError: true },
      }));
    }
  };

  countryValidation = () => {
    if (this.countryRef.current?.value === 'DEFAULT') {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, countryError: true },
      }));
    }
  };

  acceptValidation = () => {
    if (!this.acceptRef.current?.checked) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, acceptError: !this.acceptRef.current?.checked },
      }));
    }
  };

  pictureValidation = () => {
    if (!(this.pictureRef.current?.files as FileList)[0]) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, pictureError: true },
      }));
    }
  };

  birthdayValidation = () => {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const inputDate = new Date(`${this.birthdayRef.current?.value}`).setHours(0, 0, 0, 0);

    if (!this.birthdayRef.current?.value || !(currentDate >= inputDate)) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, birthdayError: true },
      }));
    }
  };

  componentDidMount() {
    this.setState({
      disabledButton: true,
    });
  }

  componentDidUpdate() {
    if (
      !Object.keys(this.state.errors).length &&
      this.state.disabledButton &&
      this.state.submitButtonClicks > 0
    ) {
      this.setState({
        disabledButton: false,
      });
    }
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(this.state.errors).length) {
      this.setState({
        disabledButton: true,
      });
      return;
    }

    const card: newCard = {
      firstName: this.firstNameRef.current?.value as string,
      lastName: this.lastNameRef.current?.value as string,
      birthday: this.birthdayRef.current?.value as string,
      country: this.countryRef.current?.value as string,
      notification: this.notificationRef.current?.checked as boolean,
      picture: URL.createObjectURL((this.pictureRef.current?.files as FileList)[0]),
      accept: this.acceptRef.current?.checked as boolean,
      id: Date.now(),
    };

    if (this.props.addCard) this.props.addCard(card);
    this.formRef.current?.reset();
    this.setState({
      disabledButton: true,
      submitButtonClicks: 0,
    });
  };

  checkErrors = () => {
    if (Object.keys(this.state.errors).length) {
      this.validate();
    }
  };

  selectInput = () => {
    if (Object.keys(this.state.errors).length === 0) {
      this.setState({
        disabledButton: false,
      });
    }
  };

  handleClick = () => {
    this.validate();
    this.setState({ submitButtonClicks: this.state.submitButtonClicks + 1 });
  };

  render() {
    const errors = this.state.errors;

    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <div className="mb-3 input-group">
          <span className="input-group-text">First and last name</span>
          <input
            ref={this.firstNameRef}
            type="text"
            name="firstName"
            className="form-control"
            onChange={this.selectInput}
            onBlur={this.checkErrors}
            data-testid="firstName"
          />
          <input
            ref={this.lastNameRef}
            type="text"
            name="lastName"
            className="form-control"
            onChange={this.selectInput}
            onBlur={this.checkErrors}
            data-testid="lastName"
          />
        </div>
        {errors.firstNameError ? (
          <ValidationError errorMessage={ERROR_MESSAGES.firstNameError} />
        ) : null}
        {errors.lastNameError ? (
          <ValidationError errorMessage={ERROR_MESSAGES.lastNameError} />
        ) : null}
        <div className="mb-3">
          <label htmlFor="date" className="col-3 col-form-label">
            Your birth date
          </label>
          <input
            ref={this.birthdayRef}
            type="date"
            id="date"
            name="date"
            onChange={this.selectInput}
            onBlur={this.checkErrors}
            data-testid="birthday"
          />
        </div>
        {errors.birthdayError ? (
          <ValidationError errorMessage={ERROR_MESSAGES.birthdayError} />
        ) : null}
        <div className="mb-3">
          <select
            ref={this.countryRef}
            className="form-select"
            name="country"
            defaultValue={'DEFAULT'}
            onChange={this.selectInput}
            onBlur={this.checkErrors}
            data-testid="country"
          >
            <option value={'DEFAULT'} disabled>
              Choose your country
            </option>
            <option value="Belarus">Belarus</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </div>
        {errors.countryError ? (
          <ValidationError errorMessage={ERROR_MESSAGES.countryError} />
        ) : null}
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Profile picture
          </label>
          <input
            ref={this.pictureRef}
            className="form-control"
            type="file"
            id="formFile"
            onChange={this.selectInput}
            onBlur={this.checkErrors}
            data-testid="picture"
          />
        </div>
        {errors.pictureError ? (
          <ValidationError errorMessage={ERROR_MESSAGES.pictureError} />
        ) : null}
        <div className="mb-3 form-check form-switch">
          <input
            ref={this.notificationRef}
            className="form-check-input"
            type="checkbox"
            name="switcher"
            id="switcher"
            onChange={this.selectInput}
          />
          <label className="form-check-label" htmlFor="switcher">
            I want to receive notifications / do not want
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            ref={this.acceptRef}
            type="checkbox"
            className="form-check-input"
            id="check"
            onChange={this.selectInput}
            onBlur={this.checkErrors}
            data-testid="accept"
          />
          <label className="form-check-label" htmlFor="check">
            I agree to the processing of personal data
          </label>
        </div>
        {errors.acceptError ? <ValidationError errorMessage={ERROR_MESSAGES.acceptError} /> : null}
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          disabled={this.state.disabledButton}
          onClick={this.handleClick}
          onBlur={this.checkErrors}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
