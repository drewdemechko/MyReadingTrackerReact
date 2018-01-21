import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { Text } from 'react-native';

export default class TextboxLabel extends React.Component {
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <Text style={stylesheet.label}>
        {this.props.text}
      </Text>
    );
  }
}
