import { ERROR_MESSAGES, REG_EXP } from '../../../helpers/constants';
import { newCard } from '../../../helpers/TypeScript/interfaces';
import { FormpageProps, formProps } from '../../../helpers/TypeScript/types';
import { useForm } from 'react-hook-form';
import ValidationError from '../ValidationError/ValidationError';

const Form = ({ addCard }: FormpageProps) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<formProps>({ mode: 'onBlur' });

  const onSubmit = (data: formProps) => {
    const { firstName, lastName, birthday, country, notification, accept, picture }: newCard = data;
    if (!picture) return;
    const newPicture = picture[0];

    const card: newCard = {
      firstName,
      lastName,
      birthday,
      country,
      notification,
      newPicture: URL.createObjectURL(newPicture),
      accept,
      id: Date.now(),
    };
    if (addCard) addCard(card);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 input-group">
        <span className="input-group-text">First and last name</span>
        <input
          type="text"
          className="form-control"
          data-testid="firstName"
          {...register('firstName', {
            required: ERROR_MESSAGES.namesErrorRequired,
            minLength: {
              value: 3,
              message: ERROR_MESSAGES.namesErrorLength,
            },
            pattern: {
              value: REG_EXP,
              message: ERROR_MESSAGES.namesErrorPattern,
            },
          })}
        />
        <input
          type="text"
          className="form-control"
          data-testid="lastName"
          {...register('lastName', {
            required: ERROR_MESSAGES.namesErrorRequired,
            minLength: {
              value: 3,
              message: ERROR_MESSAGES.namesErrorLength,
            },
            pattern: {
              value: REG_EXP,
              message: ERROR_MESSAGES.namesErrorPattern,
            },
          })}
        />
      </div>
      {errors.firstName ? <ValidationError errorMessage={errors.firstName.message} /> : null}
      {errors.lastName ? <ValidationError errorMessage={errors.lastName.message} /> : null}
      <div className="mb-3">
        <label htmlFor="date" className="col-3 col-form-label">
          Your birth date
        </label>
        <input
          type="date"
          id="date"
          data-testid="birthday"
          {...register('birthday', {
            required: ERROR_MESSAGES.birthdayError,
            validate: {
              checkdate: (value: string) =>
                !(new Date().setHours(0, 0, 0, 0) <= new Date(`${value}`).setHours(0, 0, 0, 0)) ||
                ERROR_MESSAGES.birthdayErrorCorrect,
            },
          })}
        />
      </div>
      {errors.birthday ? <ValidationError errorMessage={errors.birthday.message} /> : null}
      <div className="mb-3">
        <select
          className="form-select"
          defaultValue={''}
          data-testid="country"
          {...register('country', {
            required: ERROR_MESSAGES.countryError,
          })}
        >
          <option value="" disabled>
            Choose your country
          </option>
          <option value="Belarus">Belarus</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Russia">Russia</option>
          <option value="Ukraine">Ukraine</option>
        </select>
      </div>
      {errors.country ? <ValidationError errorMessage={errors.country.message} /> : null}
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Profile picture
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          data-testid="picture"
          {...register('picture', { required: ERROR_MESSAGES.pictureError })}
        />
      </div>
      {errors.picture ? <ValidationError errorMessage={errors.picture.message} /> : null}
      <div className="mb-3 form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="switcher"
          {...register('notification')}
        />
        <label className="form-check-label" htmlFor="switcher">
          I want to receive notifications / do not want
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="check"
          data-testid="accept"
          {...register('accept', { required: ERROR_MESSAGES.acceptError })}
        />
        <label className="form-check-label" htmlFor="check">
          I agree to the processing of personal data
        </label>
      </div>
      {errors.accept ? <ValidationError errorMessage={errors.accept.message} /> : null}
      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={!isValid}
        data-testid="submit-btn"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
