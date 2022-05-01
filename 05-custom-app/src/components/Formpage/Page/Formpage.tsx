import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Form from '../Form/Form';
import NewCard from '../NewCard/NewCard';

const Formpage = () => {
  const { state } = useContext(AppContext);

  return (
    <section className="form-section">
      <h1 className="main-title">Information about you</h1>
      <Form />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {state.cards.map((card) => {
          return <NewCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Formpage;
