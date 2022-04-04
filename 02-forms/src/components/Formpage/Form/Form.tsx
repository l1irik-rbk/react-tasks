import React from 'react';
import { newCard } from '../../../helpers/TypeScript/interfaces';
import { FormpageProps } from '../../../helpers/TypeScript/types';

class Form extends React.Component<FormpageProps, object> {
  firstNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  lastNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  birthdayRef: React.RefObject<HTMLInputElement> = React.createRef();
  countryRef: React.RefObject<HTMLSelectElement> = React.createRef();
  notificationRef: React.RefObject<HTMLInputElement> = React.createRef();
  pictureRef: React.RefObject<HTMLInputElement> = React.createRef();
  acceptRef: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3 input-group">
          <span className="input-group-text">First and last name</span>
          <input ref={this.firstNameRef} type="text" name="firstName" className="form-control" />
          <input ref={this.lastNameRef} type="text" name="lastName" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="col-3 col-form-label">
            Your birth date
          </label>
          <input
            ref={this.birthdayRef}
            type="date"
            id="date"
            name="date"
            min="1920-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="mb-3">
          <select
            ref={this.countryRef}
            className="form-select"
            name="country"
            defaultValue={'DEFAULT'}
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
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Profile picture
          </label>
          <input ref={this.pictureRef} className="form-control" type="file" id="formFile" />
        </div>
        <div className="mb-3 form-check form-switch">
          <input
            ref={this.notificationRef}
            className="form-check-input"
            type="checkbox"
            name="switcher"
            id="switcher"
          />
          <label className="form-check-label" htmlFor="switcher">
            I want to receive notifications / do not want
          </label>
        </div>
        <div className="mb-3 form-check">
          <input ref={this.acceptRef} type="checkbox" className="form-check-input" id="check" />
          <label className="form-check-label" htmlFor="check">
            I agree to the processing of personal data
          </label>
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
