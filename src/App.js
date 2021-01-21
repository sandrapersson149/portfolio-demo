import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  font-family:Helvetica;
}
`

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Navbar />

        {/* <h1>Welcome</h1> */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>


      </div>

    </Router>
  );
}

export default App;
