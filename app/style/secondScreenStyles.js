import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const secondScreenStyles = StyleSheet.create({
  header: {
    backgroundColor: colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  first: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginVertical: 10,
  },
  tetx: {
    fontSize: 16,
    marginLeft: '20%',
    marginVertical: 10,
    color: colors.white,
  },
});
