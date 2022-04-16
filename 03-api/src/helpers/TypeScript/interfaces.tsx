export interface IPerson {
  birth_year?: string;
  eye_color?: string;
  gender: string;
  hair_color?: string;
  height: string;
  mass: number;
  name: string;
  skin_color?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  skinColor?: string;
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
