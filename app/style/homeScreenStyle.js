import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../style/colors';

export const homeScreenStyle = StyleSheet.create({
  first: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#232324',
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameT: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    color: '#36e4ff',
  },
  nameSecon: {
    fontSize: 12,
    color: '#ccc',
    marginLeft: 20,
    marginBottom: 10,
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});
