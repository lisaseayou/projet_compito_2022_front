import { render, screen } from '@testing-library/react';
import App from '../App';

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('test', () => {
    it('addition', () => {
        expect(1 + 1).toStrictEqual(2);
    });

    describe('if user not connected, hide the navbar', () => {});

    describe('if user connected, show the navbar', () => {});
});
