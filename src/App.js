import Navbar from './Components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{background-color:black;}
* {
  margin: 0;
  /* font-family: Helvetica; */
  font-family: 'Work Sans', sans-serif;
}
`

const Styledh2 = styled.h2`
height:300px;
position:absolute;
left:50%;
top:50%;
color:#D84797;
`

function App() {
  const [name, setName] = useState('');
  // const [submit, setSubmit] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showThanks, setShowThanks] = useState(false);


  function ThankYou(props) {
    console.log('func ran' + props.name);
    return (
      <Styledh2>Thank you {props.name} for your message</Styledh2>
    )
  }


  const submitHandler = (e) => {
    e.preventDefault();
    // setName(e.target.value);
    setName(name);
    setShowForm(false);
    setShowThanks(true);

  }

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
            {showForm ? <Contact name={name} setName={setName} submitHandler={submitHandler} /> : null}
            {showThanks ? <ThankYou name={name} /> : null}
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

// setSubmit={setSubmit}