import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
