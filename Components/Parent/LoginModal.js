import React from 'react';
import stylesheet from '../../Layout/Stylesheet';
import Textbox from '../Textbox';
import TextboxLabel from '../TextboxLabel';
import SubmitButton from '../SubmitButton';
import LinkButton from '../LinkButton';
import ErrorLabel from '../ErrorLabel';
import { View } from 'react-native';

export default class LoginModal extends React.Component {
    render() {
        return (
            <View style={stylesheet.modal}>
                <ErrorLabel text='Invalid username or password' />
                <TextboxLabel text='Email' />
                <Textbox />
                <TextboxLabel text='Password' />
                <Textbox isPassword />
                <SubmitButton title='Login' />
                <LinkButton title='No account yet? Register' href='/register' />
            </View>
        );
    }
}