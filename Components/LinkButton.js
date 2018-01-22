import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import { TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';

export default class LinkButton extends React.Component {  
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <TouchableOpacity style={stylesheet.linkButton} >
        <Link to={this.props.href}>
            <Text style={stylesheet.linkButtonText}>
              {this.props.title}
            </Text>
        </Link>
      </TouchableOpacity>
    );
  }
}
