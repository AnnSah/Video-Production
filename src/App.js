import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Photo from './Photo';
import Footer from './Footer';

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
          <Footer />
        </Switch>


      </Router>
    </div>

  );
}

export default App;
