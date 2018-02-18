import React from 'react';
import stylesheet from './Layout/Stylesheet';
import LoginModal from './Components/Parent/LoginModal';
import Logo from './Components/Logo';
import RegistrationModal from './Components/Parent/RegistrationModal';
import SearchModal from './Components/Parent/SearchModal';
import { View } from 'react-native';
import { Switch, NativeRouter, Route } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Logo />
          <Switch>
            <Route exact path='/' component={SearchModal} />
            <Route path='/register' component={RegistrationModal} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}
