import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { TouchableOpacity, Text } from 'react-native';

export default class LinkButton extends React.Component {  
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <TouchableOpacity style={stylesheet.linkButton} >
        <Text style={stylesheet.linkButtonText}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
