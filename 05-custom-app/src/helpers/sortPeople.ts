import { NewPerson } from './TypeScript/interfaces';

export const sortPeople = (people: NewPerson[], sortType: string) => {
  let newArr;

  if (sortType === 'name') {
    newArr = people.sort((a, b) => a[sortType].localeCompare(b[sortType]));
  } else {
    newArr = people.sort((a, b) => +b[sortType] - +a[sortType]);
  }
  return newArr;
};
