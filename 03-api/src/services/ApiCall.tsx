export default class ApiCall {
  getResource = async (url: string) => {
    const res = await fetch(`https://swapi.dev/api/${url}`);
    return await res.json();
  };

  getAllPeople = async () => {
    return await this.getResource(`people`);
  };

  findPerson = async (name: string) => {
    return await this.getResource(`people/?search=${name}`);
  };
}
