import React, { useEffect, useState } from 'react';
import { IPerson } from '../../../helpers/TypeScript/interfaces';
import ApiCall from '../../../services/ApiCall';
import Spinner from '../../Spinner/Spinner';
import CardsList from '../CardsList/CardsList';
import Modal from '../Modal/Modal';
import ModalWindow from '../ModalWindow/ModalWindow';
import NotFound from '../NotFound/NotFound';
import Search from '../Search/Search';

const Homepage: React.FC = () => {
  const API = new ApiCall();
  const [people, setPeople] = useState<IPerson[]>([]);
  const [searchValue, setSearchVlaue] = useState('');
  const [isLoaded, setLoaded] = useState(false);
  const [, setDisabled] = useState(true);
  const [personNotFound, setNotFoundPerson] = useState(false);
  const [modalWindowActive, setModalWindowActive] = useState(false);
  const [madalWindowPerson, setMadalWindowPerson] = useState<null | IPerson>(null);

  useEffect(() => {
    API.getAllPeople().then((data) => {
      setPeople(data.results);
      setLoaded(true);
      setDisabled(false);
    });

    return () => {
      setPeople([]);
    };
  }, []);

  const InputChange = (value: string) => {
    setSearchVlaue(value);
  };

  const findNewItem = (e: React.FormEvent) => {
    e.preventDefault();

    setLoaded(false);
    setDisabled(true);
    setNotFoundPerson(false);

    API.findPerson(searchValue).then((data) => {
      const people: IPerson[] = data.results;
      setPeople(people);
      setSearchVlaue('');
      setLoaded(true);
      setDisabled(false);
      setNotFoundPerson(!Boolean(people.length));
    });
  };

  const showModalWindow = (person: IPerson) => {
    setModalWindowActive(true);
    setMadalWindowPerson(person);
  };

  const closeModalWindow = () => {
    setModalWindowActive(false);
    setMadalWindowPerson(null);
  };

  return (
    <section className="home-page" data-testid="home-page">
      <h1 className="main-title">Star wars heroes</h1>
      <form onSubmit={findNewItem}>
        <Search onInputChange={InputChange} searchValue={searchValue} />
      </form>
      {!isLoaded ? <Spinner /> : <CardsList people={people} showModalWindow={showModalWindow} />}
      {personNotFound ? <NotFound /> : null}
      {modalWindowActive ? (
        <Modal data-testid="homeModalWindow">
          <ModalWindow person={madalWindowPerson} closeModalWindow={closeModalWindow} />
        </Modal>
      ) : null}
    </section>
  );
};

export default Homepage;
