import React from 'react';
import LoginModal from './Components/Parent/LoginModal';
import RegistrationModal from './Components/Parent/RegistrationModal';
import { Switch, NativeRouter, Route } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' component={LoginModal} />
          <Route path='/register' component={RegistrationModal} />
        </Switch>
      </NativeRouter>
    );
  }
}
