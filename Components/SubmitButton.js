import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { Button } from 'react-native';

export default class SubmitButton extends React.Component { 
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <Button style={stylesheet.button}
      title={this.props.title}
      color='blue'
      />
    );
  }
}
