import React from 'react';
import { StyleSheet } from 'react-native';

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modal: {
    marginTop: 10
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
    fontWeight: 'bold'
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
  }
});

export default stylesheet;