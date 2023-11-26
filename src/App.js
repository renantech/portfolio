import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./interface/home/Home";
import Projects from "./interface/projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projetos' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
