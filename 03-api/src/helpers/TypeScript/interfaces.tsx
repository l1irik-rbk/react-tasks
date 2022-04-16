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

// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.dev/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: []
// starships: (2) ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/']
// url: "https://swapi.dev/api/people/1/"
// vehicles: (2) ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/']

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
