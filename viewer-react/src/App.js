import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route exact path="/" element={<Component />} /> */}
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/test1" element={<h1>test2</h1>} />
          <Route exact path="/test2" element={<h1>test3</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
