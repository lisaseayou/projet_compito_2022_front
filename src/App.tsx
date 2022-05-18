import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import MenuList from "./components/Menu";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          {MenuList.map(({ path, Component }, index) => (
            <Route path={path} key={index} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
