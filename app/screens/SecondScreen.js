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
    description: 'Completed',
    lineColor: colors.lineBold,
    icon: require('../assets/images/locked.png'),
  },
  {
    time: '16:30',
    title: 'Go to Fitness center',
    description: 'Completed',
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
      titleStyle={[
        {
          paddingTop: 0,
          marginLeft: 20,
          marginTop: Platform.OS === 'android' ? -12 : -10,
        },
      ]}
      listViewStyle={{marginLeft: 10, marginTop: 20}}
      timeStyle={{paddingLeft: 10, borderRadius: 13, padding: 0}}
      descriptionStyle={{
        color: 'gray',
        paddingTop: 0,
        marginBottom: 20,
        marginLeft: 20,
        fontSize: 12,
        margin: 0,
      }}
      iconStyle={{
        backgroundColor: '#fff',
        width: 18,
        height: 18,
        marginTop: 2,
      }}
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
