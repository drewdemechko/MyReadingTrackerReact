import React from 'react';
import stylesheet from '../Layout/Stylesheet';
import Textbox from './Textbox';
import TextboxLabel from './TextboxLabel';
import { View } from 'react-native';

export default class LoginModal extends React.Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <View>
                    <TextboxLabel text='Username' />
                    <Textbox />
                    <TextboxLabel text='Password' />
                    <Textbox isPassword />
                </View>
            </View>
        );
    }
}