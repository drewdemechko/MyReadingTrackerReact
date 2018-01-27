import React from 'react';
import stylesheet from '../../Layout/Stylesheet';
import Textbox from '../Textbox';
import TextboxLabel from '../TextboxLabel';
import Logo from '../Logo';
import SubmitButton from '../SubmitButton';
import LinkButton from '../LinkButton';
import { View } from 'react-native';

export default class LoginModal extends React.Component {
    render() {
        return (
            <View style={stylesheet.preloginModal}>
                <TextboxLabel text='Email' />
                <Textbox />
                <TextboxLabel text='Password' />
                <Textbox isPassword />
                <TextboxLabel text='Verify Password' />
                <Textbox isPassword />
                <SubmitButton title='Register' />
                <LinkButton title='Already have an account? Login' href='/' />
            </View>
        );
    }
}