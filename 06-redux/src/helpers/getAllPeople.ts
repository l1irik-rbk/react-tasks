import ApiCall from '../services/ApiCall';

export const getAllPeople = (totalPeople: number, searchValue: string) => {
  const API = new ApiCall();

  const totalPages = Math.ceil(totalPeople / 10);
  const pagesArray = [];

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }
  const promisesArray = Promise.all(
    pagesArray.map(async (pageNumber) => {
      return API.findPerson(searchValue, pageNumber).then((data) => data.results);
    })
  );

  return promisesArray;
};

export const getSlicedArray = async (
  paginationSortValue: number,
  totalPeople: number,
  searchValue: string
) => {
  const slicedArray = [];
  const array = await getAllPeople(totalPeople, searchValue);
  const flatedArray = array?.flat();

  if (flatedArray) {
    for (let i = 0; i < flatedArray.length; i += paginationSortValue) {
      slicedArray.push(flatedArray.slice(i, i + paginationSortValue));
    }
  }

  return slicedArray;
};
