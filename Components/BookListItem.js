import React from 'react';
import listItemStylesheet from '../Layout/ListItemStylesheet'
import { View, Text } from 'react-native';

export default class TextboxLabel extends React.Component {
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <View style={listItemStylesheet.container}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}