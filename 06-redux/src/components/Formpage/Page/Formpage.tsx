import React from 'react';
import { useAppSelector } from '../../../toolkitRedux/reduxHooks';
import Form from '../Form/Form';
import NewCard from '../NewCard/NewCard';

const Formpage = () => {
  const { cards } = useAppSelector((state) => state.appReducer);

  return (
    <section className="form-section">
      <h1 className="main-title">Information about you</h1>
      <Form />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {cards.map((card) => {
          return <NewCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Formpage;
