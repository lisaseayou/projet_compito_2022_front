import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { GET_PROJECT_BY_USER } from './graphql/query';
import App from './App';
import { Provider } from 'react-redux';
import store from './context/store';

describe('App and home', () => {
    const GET_WILDERS_MOCKS: MockedResponse = {
        request: { query: GET_PROJECT_BY_USER },
        result: {
            data: {
                projectsByUser: [
                    {
                        createdAt: '2022-12-07T14:50:03.807Z',
                        description: 'guyjhrfgvuyjhtguyjgh',
                        users: [
                            {
                                id: '1c91eb7f-8b27-4412-a32f-9e4f720674f1',
                                name: 'Marie',
                            },
                        ],
                    },
                    {
                        createdAt: '2022-12-07T11:05:43.442Z',
                        description: 'jkjiokjoikjoiujikhuj',
                        users: [
                            {
                                id: '1c91eb7f-8b27-4412-a32f-9e4f720674f1',
                                name: 'Marie',
                            },
                        ],
                    },
                ],
            },
        },
    };

    const renderApp = () => {
        render(
            <MockedProvider mocks={[GET_WILDERS_MOCKS]}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MockedProvider>
        );
    };

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        renderApp();
    });

    it('app', async () => {
        const title = screen.getByRole('heading', { level: 1 });
        expect(title.textContent).toEqual('Home Page');

        expect(screen.getByRole('button')).toBeInTheDocument();
        const element = await screen.findByText(/Home Page/i, {
            selector: 'h1',
        });
        expect(element).toBeInTheDocument();
    });
});
