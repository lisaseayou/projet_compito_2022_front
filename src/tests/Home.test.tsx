import { render, screen } from "@testing-library/react";
import App from "../App";
import {MockedProvider} from "@apollo/client/testing";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('component Home.tsx', () => {
    const renderApp = () => {
        render(
            <MockedProvider mocks={[]}>
                <App />
            </MockedProvider>
        )
    }
    beforeEach(() => renderApp())
    it('render title', () => {
        const title = screen.getByRole('heading', { level:1 })
        expect(title.textContent).toStrictEqual('Home Page')
    })
})

describe('last projects have been fetch', () => {
    it('render last project', () => {

    })
})