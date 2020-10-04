import * as React from 'react';
import {View, Text, Button, Image, Pressable} from 'react-native';
import {firstScreenStyles} from '../style/firstScreenStyle';
import {secondScreenStyles} from '../style/secondScreenStyles';

export const Header = props => {
  return (
    <View style={firstScreenStyles.topV}>
      <Pressable onPress={props.onPress}>
        <Image
          source={require('../assets/images/arrowleft.png')}
          style={firstScreenStyles.first}
        />
      </Pressable>
      <Text style={firstScreenStyles.tetx}>Chapter 1</Text>
      <View style={firstScreenStyles.bar} />
      <Text style={firstScreenStyles.tetx2}>Random Text</Text>
    </View>
  );
};

export const SecondHeader = props => {
  return (
    <View style={secondScreenStyles.header}>
      <Pressable onPress={props.onPress}>
        <Image
          source={require('../assets/images/chevronleft.png')}
          style={secondScreenStyles.first}
        />
      </Pressable>
      <Text style={secondScreenStyles.tetx}>UX Fundamentals </Text>
    </View>
  );
};

export const WidthButton = props => {
  return (
    <Pressable style={secondScreenStyles.keepL}>
      <Text>Keep Learning</Text>
    </Pressable>
  );
};

export const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 0.5,
      }}>
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first}
      />
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first2}
      />
      <Text style={firstScreenStyles.newBotom}>10/10</Text>
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first}
      />
      <Image
        source={require('../assets/images/arrowleft.png')}
        style={firstScreenStyles.first23}
      />
    </View>
  );
};
