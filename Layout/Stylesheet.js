import React from 'react';
import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'stretch'
  },
  modal: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  field: {
    marginBottom: 10
  },
  textInput: {
    fontSize: 24,
    height: 50,
    width: 200,
    marginBottom: 10
  },
  label: {
    fontWeight: 'bold',
    width: 200
  },
  errorLabel: {
    color: 'red',
    width: 200
  },
  logo: {
    marginTop: 30,
    height: 100
  },
  linkButton: {
    marginTop: 10,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  linkButtonText: {
    color: 'blue'
  },
  searchButton: {
    width: 100
  },
  submitButton: {
    width: 200
  }
});

export default stylesheet;