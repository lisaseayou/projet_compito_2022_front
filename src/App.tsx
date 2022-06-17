import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuList from "./components/Menu";
import Nav from "./layout/Nav";
import AddTask from "./pages/AddTask";
import AddProject from "./pages/AddProject";


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
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/addproject" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
