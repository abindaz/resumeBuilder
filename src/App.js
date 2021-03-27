import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Basic from './Basic';
import Education from './Education';
import Intro from './Intro';
import Nav from './Nav';
import Resume from './Resume';
import Skills from './Skills';
import Work from './Work';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
