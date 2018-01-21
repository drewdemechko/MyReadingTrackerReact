import React from 'react';
import stylesheet from '../../Layout/Stylesheet';
import Textbox from '../Textbox';
import TextboxLabel from '../TextboxLabel';
import Logo from '../Logo';
import SubmitButton from '../SubmitButton';
import { View } from 'react-native';

export default class LoginModal extends React.Component {
    render() {
        return (
            <View style={stylesheet.container}>
                <Logo />
                <View style={stylesheet.preloginModal}>
                    <TextboxLabel text='Username' />
                    <Textbox />
                    <TextboxLabel text='Password' />
                    <Textbox isPassword />
                    <SubmitButton title='Login' />
                </View>
            </View>
        );
    }
}