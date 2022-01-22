import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router} from "react-router-dom";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
          <SignUp/>
          <Footer />
    </Router>
  );
}

export default App;
