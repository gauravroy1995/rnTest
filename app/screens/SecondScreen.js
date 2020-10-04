import * as React from 'react';
import {View, Text, Button, Image, ScrollView, Pressable} from 'react-native';
import {Header, BottomTab, SecondHeader} from '../components/globalComponents';
import {firstScreenStyles} from '../style/firstScreenStyle';
import {secondScreenStyles} from '../style/secondScreenStyles';
import Timeline from 'react-native-timeline-flatlist';
import {colors} from '../style/colors';

const dataForTimeline = [
  {
    time: '09:00',
    title: 'Archery Training',
    description: 'Completed',
    lineColor: colors.lineColor,
    icon: require('../assets/images/check.png'),
  },
  {
    time: '10:45',
    title: 'Play Badminton',
    description: 'Completed',
    lineColor: colors.lineColor,
    icon: require('../assets/images/check.png'),
  },
  {
    time: '12:00',
    title: 'Lunch',
    description: '1 Min 20 Se',
    lineColor: colors.lineBold,
    icon: require('../assets/images/current.png'),
  },
  {
    time: '14:00',
    title: 'Watch Soccer',
    description: '3 Hr 2 Mins',
    lineColor: colors.lineBold,
    icon: require('../assets/images/locked.png'),
  },
  {
    time: '16:30',
    title: 'Go to Fitness center',
    description: '3 Hr 2 Mins',
    lineColor: colors.lineBold,
    icon: require('../assets/images/locked.png'),
  },
];

const renderTimeLine = () => {
  return (
    <Timeline
      showTime={false}
      innerCircle={'icon'}
      lineWidth={1}
      data={dataForTimeline}
      titleStyle={secondScreenStyles.titleS}
      listViewStyle={secondScreenStyles.lisV}
      timeStyle={secondScreenStyles.timeS}
      descriptionStyle={secondScreenStyles.descSty}
      iconStyle={secondScreenStyles.icStt}
    />
  );
};

const Card = () => {
  return (
    <View style={secondScreenStyles.cardW}>
      {CardHeader()}
      {renderTimeLine()}
    </View>
  );
};

const CardHeader = () => {
  return (
    <View style={secondScreenStyles.cardHead}>
      <Text style={secondScreenStyles.cardHeadT}>Introduction to UX n</Text>
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
