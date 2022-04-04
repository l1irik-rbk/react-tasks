import React from 'react';
import { newCard } from '../../../helpers/TypeScript/interfaces';
import { FormpageProps, FormpageState } from '../../../helpers/TypeScript/types';
import Form from '../Form/Form';
import NewCard from '../NewCard/NewCard';

class Formpage extends React.Component<FormpageProps, FormpageState> {
  constructor(props: FormpageProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (newCard: newCard) => {
    this.setState({
      cards: [...this.state.cards, newCard],
    });
  };

  render() {
    console.log(this.state);
    return (
      <section className="form-section">
        <h1 className="main-title">Information about you</h1>
        <Form addCard={this.addCard} />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {this.state.cards.map((card) => {
            return <NewCard key={card.id} card={card} />;
          })}
        </div>
      </section>
    );
  }
}

export default Formpage;
