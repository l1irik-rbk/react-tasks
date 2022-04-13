import React from 'react';
import { HomepageState } from '../../../helpers/TypeScript/types';
import ApiCall from '../../../services/ApiCall';
import Spinner from '../../Spinner/Spinner';
import CardsList from '../CardsList/CardsList';
import NotFound from '../NotFound/NotFound';
import Search from '../Search/Search';

class Homepage extends React.Component<object, HomepageState> {
  ApiCall = new ApiCall();

  constructor(props: object) {
    super(props);
    this.state = {
      people: [],
      searchValue: '',
      isLoaded: false,
      disabled: true,
      personNotFound: false,
    };
  }

  componentDidMount() {
    this.ApiCall.getAllPeople().then((data) => {
      this.setState({
        people: data.results,
        isLoaded: true,
        disabled: false,
      });
    });
  }

  onInputChange = (value: string) => {
    this.setState({
      searchValue: value,
    });
  };

  findNewItem = (e: React.FormEvent) => {
    e.preventDefault();

    this.setState({
      isLoaded: false,
      disabled: true,
      personNotFound: false,
    });

    const { searchValue } = this.state;

    this.ApiCall.findPerson(searchValue)
      .then((data) => {
        const people = data.results;

        this.setState({
          people,
          searchValue: '',
          isLoaded: true,
          disabled: false,
          personNotFound: !Boolean(people.length),
        });
      })
      .catch((e) => {
        console.log(e);
        console.log('catch');
      });
  };

  render() {
    const { people, isLoaded, personNotFound } = this.state;
    console.log(this.state);
    return (
      <section className="home-page" data-testid="home-page">
        <h1 className="main-title">Star wars heroes</h1>
        {/* <NotFound /> */}
        <form onSubmit={this.findNewItem}>
          <Search onInputChange={this.onInputChange} searchValue={this.state.searchValue} />
        </form>
        {!isLoaded ? <Spinner /> : <CardsList people={people} />}
        {personNotFound ? <NotFound /> : null}
      </section>
    );
  }
}

export default Homepage;
