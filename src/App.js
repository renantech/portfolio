import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./interface/home/Home";
import Projects from "./interface/projects/Projects";
import Aboutme from "./interface/aboutme/Aboutme";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projects />} />
          <Route path='/sobremim' element={<Aboutme />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
