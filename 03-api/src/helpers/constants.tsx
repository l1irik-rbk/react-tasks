import { newCard } from './TypeScript/interfaces';

export const MIN_LENGTH_OF_NAME = 3;

export const ERROR_MESSAGES = {
  acceptError: 'This checkbox should be cecked',
  firstNameError: 'First name does not match the input conditions',
  lastNameError: 'Last name does not match the input conditions',
  countryError: 'You should select your country of residence',
  pictureError: 'You should add profile picture',
  birthdayError: 'You should choose correct date',
};

export const REG_EXP = /^([а-яё]+|[a-z]+)$/i;

export const TEST_CARD: newCard = {
  firstName: 'First name',
  lastName: 'Last name',
  birthday: '2022-04-01',
  country: 'Russia',
  notification: true,
  picture:
    'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg',
  accept: true,
  id: Date.now(),
};
