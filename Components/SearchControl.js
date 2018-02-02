import React from 'react';
import stylesheet from '../Layout/Stylesheet'
import SubmitButton from './SubmitButton';
import Textbox from './Textbox';
import { View } from 'react-native';

export default class SearchControl extends React.Component {
  constructor(props){
    super(props);   
  }
  
  render() {
    return (
      <View>
        <View>
          <Textbox />
        </View>
        <View>
          <SubmitButton title='Search' />
        </View>
      </View>
    );
  }
}