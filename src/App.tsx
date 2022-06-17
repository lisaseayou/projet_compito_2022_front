import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuList from "./components/Menu";
import Nav from "./layout/Nav";

function App() {
  return (
    <>
    
    <div className="mr-6">
      
      <BrowserRouter basename="/">
      {/* <Nav /> */}
        <Routes>
          {MenuList.map(({ path, Component }, index) => (
            <Route path={path} key={index} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
