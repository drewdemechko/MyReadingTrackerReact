import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { View, Image } from 'react-native';

export default class Logo extends React.Component { 
  render() {
    return (
      <View style={stylesheet.logoContainer}>
        <Image style={stylesheet.logo}
          source={require('../Images/tempLogo.gif')}
        />
      </View>
    );
  }
}
