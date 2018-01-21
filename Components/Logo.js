import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { Image } from 'react-native';

export default class Logo extends React.Component { 
  render() {
    return (
      <Image style={stylesheet.logo}
        source={require('../Images/tempLogo.gif')}
      />
    );
  }
}
