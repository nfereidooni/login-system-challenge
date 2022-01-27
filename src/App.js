import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
          
    </Router>
  );
}

export default App;
