import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="lg:flex">
      <Sidebar/>
      <div className="w-full "> 
        <Search/>
        <Routes>
            <Route path="/about" element={<About/>} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
