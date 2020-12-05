import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as S from './App.style';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navb from '../Navb';
import Character from '../../pages/Character';
import Home from '../../pages/Home';
import Team from '../../pages/Team';
import About from '../../pages/About';

function App() {
  return (
    <Router>
      <S.App>
        <Navb />
        <Switch>
          <Route path="/character">
            <Character />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* link stuff here to load different components */}
      </S.App>
    </Router>
  );
}

export default App;
