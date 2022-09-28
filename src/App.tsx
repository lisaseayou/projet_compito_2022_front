import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuList from './components/Menu';
import Nav from './layout/Nav';
import AddTask from './pages/AddTask';
import AddProject from './pages/AddProject';
import Auth from './pages/auth/Auth';
import PrivateRoute from './pages/PrivateRoute';
import Logout from './pages/auth/Logout';
import UserHome from './pages/user/UserHome';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
    return (
        <>
            <div className="mr-0">
                <BrowserRouter basename="/">
                    <Nav />

                    <div className="mb-20 sm:mb-0 sm:ml-16 min-h-screen">
                        <Routes>
                            {MenuList.map(({ path, Component }, index) => (
                                <Route
                                    path={path}
                                    key={index}
                                    element={<Component />}
                                />
                            ))}
                            <Route
                                path="/addtask"
                                element={
                                    <PrivateRoute>
                                        <AddTask />
                                    </PrivateRoute>
                                }
                            />

                            <Route
                                path="/user/home"
                                element={
                                    <PrivateRoute>
                                        <UserHome />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/addproject"
                                element={<AddProject />}
                            />

                            <Route path="auth" element={<Auth />}>
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                            </Route>

                            <Route path="logout" element={<Logout />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
