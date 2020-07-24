import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Amplify from './utils/AWS-Amplify';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';

const AmplifyInstance = new Amplify();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/address-info">
          <AddressInfo amplify={AmplifyInstance} />
        </Route>
        <Route path="/">
          <PersonalInfo amplify={AmplifyInstance} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
