import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { View, Button } from 'react-native';

export default class SubmitButton extends React.Component { 
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <View style={stylesheet.submitButton}>
        <Button title={this.props.title} 
          color='blue'
        />
      </View>
    );
  }
}
