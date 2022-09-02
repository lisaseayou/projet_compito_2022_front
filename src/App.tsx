import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MenuList from './components/Menu';
import Nav from './layout/Nav';
import AddTask from './pages/AddTask';
import AddProject from './pages/AddProject';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import Auth from './pages/auth/Auth';
import PrivateRoute from './pages/PrivateRoute';
import Logout from './pages/auth/Logout';
import UserHome from './pages/user/UserHome';

function App() {
    return (
        <>
            <div className="mr-0">
                <BrowserRouter basename="/">
                    <Nav />
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
                        <Route path="/addproject" element={<AddProject />} />

            <Route path="auth" element={<Auth />}>
              <Route path="login" element={<SignIn />} />
              <Route path="register" element={<SignUp />} />
            </Route>

            <Route path="logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
