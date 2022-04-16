import { render } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('modal shows the modal children', () => {
    const { getByText } = render(
      <Modal>
        <div>Modal window</div>
      </Modal>
    );
    expect(getByText('Modal window')).toBeInTheDocument();
  });
});
