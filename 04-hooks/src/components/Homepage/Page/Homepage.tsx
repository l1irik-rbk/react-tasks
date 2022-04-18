import React from 'react';
import { IPerson } from '../../../helpers/TypeScript/interfaces';
import { HomepageState } from '../../../helpers/TypeScript/types';
import ApiCall from '../../../services/ApiCall';
import Spinner from '../../Spinner/Spinner';
import CardsList from '../CardsList/CardsList';
import Modal from '../Modal/Modal';
import ModalWindow from '../ModalWindow/ModalWindow';
import NotFound from '../NotFound/NotFound';
import Search from '../Search/Search';

class Homepage extends React.Component<object, HomepageState> {
  ApiCall = new ApiCall();
  _isMounted = false;

  constructor(props: object) {
    super(props);
    this.state = {
      people: [],
      searchValue: '',
      isLoaded: false,
      disabled: true,
      personNotFound: false,
      modalWindowActive: false,
      madalWindowPerson: null,
    };
  }

  componentDidMount() {
    this._isMounted = true;

    this.ApiCall.getAllPeople().then((data) => {
      if (this._isMounted) {
        this.setState({
          people: data.results,
          isLoaded: true,
          disabled: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
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

    this.ApiCall.findPerson(searchValue).then((data) => {
      const people: IPerson[] = data.results;

      this.setState({
        people,
        searchValue: '',
        isLoaded: true,
        disabled: false,
        personNotFound: !Boolean(people.length),
      });
    });
  };

  showModalWindow = (person: IPerson) => {
    this.setState({
      modalWindowActive: true,
      madalWindowPerson: person,
    });
  };

  closeModalWindow = () => {
    this.setState({
      modalWindowActive: false,
      madalWindowPerson: null,
    });
  };

  render() {
    const { people, isLoaded, personNotFound, modalWindowActive, madalWindowPerson } = this.state;

    return (
      <section className="home-page" data-testid="home-page">
        <h1 className="main-title">Star wars heroes</h1>
        <form onSubmit={this.findNewItem}>
          <Search onInputChange={this.onInputChange} searchValue={this.state.searchValue} />
        </form>
        {!isLoaded ? (
          <Spinner />
        ) : (
          <CardsList people={people} showModalWindow={this.showModalWindow} />
        )}
        {personNotFound ? <NotFound /> : null}
        {modalWindowActive ? (
          <Modal data-testid="homeModalWindow">
            <ModalWindow person={madalWindowPerson} closeModalWindow={this.closeModalWindow} />
          </Modal>
        ) : null}
      </section>
    );
  }
}

export default Homepage;
