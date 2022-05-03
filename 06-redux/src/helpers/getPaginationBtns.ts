export const getPagesArray = (totalPeople: number, peopleCount: number) => {
  const pagesArray = [];
  const totalPages = Math.ceil(totalPeople / peopleCount);

  for (let i = 0; i < totalPages; i++) {
    pagesArray.push(i + 1);
  }

  return pagesArray;
};
