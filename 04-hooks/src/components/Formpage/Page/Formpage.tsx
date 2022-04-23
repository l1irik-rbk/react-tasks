import React, { useState } from 'react';
import { newCard } from '../../../helpers/TypeScript/interfaces';
import Form from '../Form/Form';
import NewCard from '../NewCard/NewCard';

const Formpage = () => {
  const [cards, setCards] = useState<newCard[]>([]);

  const addCard = (newCard: newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <section className="form-section">
      <h1 className="main-title">Information about you</h1>
      <Form addCard={addCard} />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {cards.map((card) => {
          return <NewCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
};

export default Formpage;
