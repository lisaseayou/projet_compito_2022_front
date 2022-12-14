import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './layout/Nav';
import Auth from './pages/auth/Auth';
import PrivateRoute from './pages/PrivateRoute';
import {
    Menu,
    MenuList,
    MenuListAuth,
    MenuListProtected,
} from './components/Menu';
import { useSelector } from 'react-redux';
import { IUser } from './types/User';

export type MenuItem = Pick<Menu, 'path' | 'Component'>;

function App() {
    const user: IUser = useSelector((state: any) => state.user);
    console.log('ok');

    return (
        <>
            <div className="mr-0 relative">
                <BrowserRouter basename="/">
                    {user.id ? <Nav /> : null}

                    <div
                        className={`mb-20 sm:mb-0 ${
                            user.id ? 'sm:ml-16' : 'sm:ml-0'
                        } min-h-screen `}
                    >
                        <Routes>
                            {MenuList.map(
                                (
                                    { path, Component }: MenuItem,
                                    index: number
                                ) => (
                                    <Route
                                        key={index}
                                        path={path}
                                        element={<Component />}
                                    />
                                )
                            )}

                            <Route path="auth" element={<Auth />}>
                                {MenuListAuth.map(
                                    (
                                        { path, Component }: MenuItem,
                                        index: number
                                    ) => (
                                        <Route
                                            key={index}
                                            path={path}
                                            element={<Component />}
                                        />
                                    )
                                )}
                            </Route>

                            {MenuListProtected.map(
                                (
                                    { path, Component }: MenuItem,
                                    index: number
                                ) => (
                                    <Route
                                        key={index}
                                        path={path}
                                        element={
                                            <PrivateRoute>
                                                <Component />
                                            </PrivateRoute>
                                        }
                                    />
                                )
                            )}
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
