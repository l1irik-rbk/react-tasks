export default class ApiCall {
  getResource = async (url: string) => {
    const res = await fetch(`https://swapi.dev/api/${url}`);
    return await res.json();
  };

  getAllPeople = async () => {
    return await this.getResource(`people`);
  };

  getAllPeopleOnPage = async (pageNumber = 1) => {
    return await this.getResource(`people/?page=${pageNumber}`);
  };

  findPerson = async (name: string, pageNumber = 1) => {
    return await this.getResource(`people/?search=${name}&page=${pageNumber}`);
  };
}
