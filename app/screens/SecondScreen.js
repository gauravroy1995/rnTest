import * as React from 'react';
import {View, Text, Button, Image, ScrollView, Pressable} from 'react-native';
import {Header, BottomTab, SecondHeader} from '../components/globalComponents';
import {firstScreenStyles} from '../style/firstScreenStyle';
import {secondScreenStyles} from '../style/secondScreenStyles';
import Timeline from 'react-native-timeline-flatlist';

const dataForTimeline = [
  {
    time: '09:00',
    title: 'Archery Training',
    description:
      'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
    lineColor: '#009688',
    icon: require('../assets/images/arrowleft.png'),
  },
  {
    time: '10:45',
    title: 'Play Badminton',
    description:
      'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
    icon: require('../assets/images/arrowleft.png'),
  },
  {
    time: '12:00',
    title: 'Lunch',
    icon: require('../assets/images/arrowleft.png'),
  },
  {
    time: '14:00',
    title: 'Watch Soccer',
    description:
      'Team sport played between two teams of eleven players with a spherical ball. ',
    lineColor: '#009688',
    icon: require('../assets/images/arrowleft.png'),
  },
  {
    time: '16:30',
    title: 'Go to Fitness center',
    description: 'Look out for the Best Gym & Fitness Centers around me :)',
    icon: require('../assets/images/arrowleft.png'),
  },
];

const Card = () => {
  return (
    <View style={secondScreenStyles.cardW}>
      {CardHeader()}

      <Timeline
        showTime={false}
        innerCircle={'icon'}
        lineWidth={1}
        // onEventPress={async obj => { this.checkTimeoutFunc(obj, topicDetails); }}
        data={dataForTimeline}
        // onPress={async obj => { this.checkTimeoutFunc(obj, topicDetails); }}
        // titleStyle={[{ paddingTop: 0, marginLeft: 20, marginTop: Platform.OS === 'android' ? -12 : -10 }, styles.listText,]}
        // listViewStyle={{ fontFamily: fontType.gilroyRegular }}
        // detailContainerStyle={{ fontFamily: fontType.gilroyRegular }}
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
        separatorStyle={{borderStyle: 'dashed'}}
      />
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
