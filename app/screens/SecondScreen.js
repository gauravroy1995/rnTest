import * as React from 'react';
import {View, Text, Button, Image, ScrollView, Pressable} from 'react-native';
import {Header, BottomTab, SecondHeader} from '../components/globalComponents';
import {firstScreenStyles} from '../style/firstScreenStyle';
import {secondScreenStyles} from '../style/secondScreenStyles';

const Card = () => {
  return (
    <View style={secondScreenStyles.cardW}>
      {CardHeader()}
      {CardHeader()}
    </View>
  );
};

const CardHeader = () => {
  return (
    <View style={secondScreenStyles.cardHead}>
      <Text style={secondScreenStyles.cardHeadT}>Introduction to UX </Text>
    </View>
  );
};

const SecondScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SecondHeader onPress={() => navigation.navigate('Home')} />
      <ScrollView style={{flex: 1}}>
        {Card()}
        {Card()}
        {Card()}
      </ScrollView>
    </View>
  );
};

export default SecondScreen;
