export interface IHouse {
  houseName: string;
  description: string;
  price: number;
  date: string;
  src: string;
  id: number;
}

export interface fakeStore {
  [key: string]: string;
}

export interface newCard {
  firstName: string;
  lastName: string;
  birthday: string;
  country: string;
  notification: boolean;
  picture?: string;
  accept: boolean;
  id: number;
}

export interface Errors {
  acceptError?: boolean;
  firstNameError?: boolean;
  lastNameError?: boolean;
  countryError?: boolean;
  pictureError?: boolean;
  birthdayError?: boolean;
}
