import './App.css';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Photo from './Photo/Photo';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/photo">
            <Photo />
          </Route>

        </Switch>

      </Router>
    </div>

  );
}

export default App;
