import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('card', () => {
  const house = {
    houseName: 'Gaular, Sogn og Fjordane',
    description:
      'Enjoy the relaxed and comfortable enclosure of the Birdbox. Sleep right beside nature and its amazing surroundings. Lay down and look at the spectacular mountains all around you. Put on your skis and have a breathtaking journey around the nearby trails. Hike down to Langelandsvatnet in the summer and enjoy swimming in energizing water.',
    price: 400,
    date: '6-13 june',
    src: 'https://a0.muscache.com/im/pictures/6721fc25-afe0-4f35-b181-212ec8ddc186.jpg?im_w=1200',
    id: 1,
  };

  test('render card', () => {
    // render(<Card house={house} />);
    // expect(screen.getByAltText(/house/i)).toHaveClass('house-image');
    // expect(screen.getByRole('img')).toHaveProperty('src');
    // expect(screen.getByText(/400/i)).toHaveStyle({ color: 'red' });
    // expect(screen.getByText(/june/i)).toBeInTheDocument();
  });
});
