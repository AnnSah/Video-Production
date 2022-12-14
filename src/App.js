import './App.css';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Photo from './Photo/Photo';
import Drone from './Drone/Drone';
import LifeStyle from './Photo/Lifestyle/LifeStyle';
import LandScape from './Photo/LandScape/LandScape';
import Contact from './Contact';
import Video from './Video/Video';
import VideoPackage from './Video/VideoPackage/VideoPackage';


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

          <Route path="/drone">
            <Drone />
          </Route>

          <Route path="/lifestyle">
            <LifeStyle />
          </Route>

          <Route path="/landscape">
            <LandScape />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/video">
            <Video />
          </Route>

          <Route path="/videopackage">
            <VideoPackage />
          </Route>

        </Switch>

      </Router>
    </div>

  );
}

export default App;
