import { newCard } from './TypeScript/interfaces';

export const MIN_LENGTH_OF_NAME = 3;

export const ERROR_MESSAGES = {
  namesErrorRequired: 'This field should be filled',
  namesErrorLength: 'You should enter at least three characters',
  namesErrorPattern: 'The name should contain only Russian and Latin letters',
  acceptError: 'This checkbox should be cecked',
  countryError: 'You should select your country of residence',
  pictureError: 'You should add profile picture',
  birthdayError: 'You should choose a date',
  birthdayErrorCorrect: 'You should select a date that is less than today',
};

export const REG_EXP = /^([а-яё]+|[a-z]+)$/i;

export const TEST_CARD: newCard = {
  firstName: 'First name',
  lastName: 'Last name',
  birthday: '2022-04-01',
  country: 'Russia',
  notification: true,
  newPicture:
    'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg',
  accept: true,
  id: Date.now(),
};
