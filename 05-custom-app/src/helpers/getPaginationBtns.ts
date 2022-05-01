export const getPagesArray = (totalPeople: number) => {
  const pagesArray = [];
  const peoplePerPage = 10;
  const totalPages = Math.ceil(totalPeople / peoplePerPage);

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
};
