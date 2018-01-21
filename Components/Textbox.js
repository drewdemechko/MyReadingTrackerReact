import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class Textbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};    
  }
  
  render() {
    return (
      <TextInput style={stylesheet.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        secureTextEntry={this.props.isPassword}
      />
    );
  }
}

Textbox.propTypes = {
  isPassword: PropTypes.bool
};
