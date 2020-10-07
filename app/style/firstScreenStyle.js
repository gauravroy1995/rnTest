import React from 'react';
import {StyleSheet} from 'react-native';

export const firstScreenStyles = StyleSheet.create({
  cards: {
    backgroundColor: '#36e4ff',
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 5,
  },
  horiZ: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  horiZNw: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,

    // alignItems: 'center',
  },
  headlIn: {
    borderBottomColor: '#abaaa7',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  headLi: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textId: {
    fontWeight: '700',
    fontSize: 16,
    marginRight: 10,
    width: '30%',
  },
  rightT: {
    color: '#0a61c4',
    fontWeight: '700',
  },
  rightT23: {
    color: '#0a61c4',
    fontSize: 12,
  },
  cont: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  tetxHead: {
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 5,
  },
  tetxHead2: {
    fontWeight: '700',
    textAlign: 'center',
    color: '#0a61c4',
    marginTop: 5,
  },
  botmS: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    marginTop: 10,
  },
  pressN: {
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStNN: {
    color: '#00ff44',
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
