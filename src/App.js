import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/Abount";
import { MovieDetail } from "./views/MovieDetail";

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/movie/:id" element={<MovieDetail />}> </Route>
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
