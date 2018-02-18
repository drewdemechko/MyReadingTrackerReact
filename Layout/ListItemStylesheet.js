import React from 'react';
import { StyleSheet } from 'react-native';

const listItemStylesheet = StyleSheet.create({
  listModal: {
    marginTop: 10,
    borderTopWidth: 2,
    height: 400,
    overflow: 'scroll'
  },
  container: {
    borderBottomWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    height: 45,
    width: 55
  }
});

export default listItemStylesheet;