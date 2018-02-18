import React from 'react';
import listItemStylesheet from '../Layout/ListItemStylesheet'
import { View, Image, Text } from 'react-native';

export default class TextboxLabel extends React.Component {
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <View style={listItemStylesheet.container}>
        <Image style={listItemStylesheet.image} source={require('../Images/book.png')} />
        <Text style={listItemStylesheet.title}>{this.props.title}</Text>
        <Image style={listItemStylesheet.image} source={require('../Images/library.png')} />
        <Image style={listItemStylesheet.image} source={require('../Images/wishlist.png')} />
      </View>
    );
  }
}