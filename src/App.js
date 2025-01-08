import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Header from './components/layout/Header';
import Home from "./components/Home";
import Footer from './components/layout/Footer';
import SearchPage from "./components/SearchPage";
import SearchResult from "./components/SearchResult";
import Modal from "./components/Modal";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
        <Route path="/search">
          <Modal />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
