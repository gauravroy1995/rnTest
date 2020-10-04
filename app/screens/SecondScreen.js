import * as React from 'react';
import {View, Text, Button, Image, ScrollView, Pressable} from 'react-native';
import {Header, BottomTab, SecondHeader} from '../components/globalComponents';
import {firstScreenStyles} from '../style/firstScreenStyle';
import {secondScreenStyles} from '../style/secondScreenStyles';

const TextStatic = () => {
  return (
    <Text style={firstScreenStyles.textN}>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </Text>
  );
};

const SecondScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SecondHeader onPress={() => navigation.navigate('Home')} />
      <ScrollView style={{flex: 1}}>
        <Image
          style={firstScreenStyles.mapI}
          source={require('../assets/images/map.jpg')}
        />
        {TextStatic()}
        {TextStatic()}
        {TextStatic()}
        {TextStatic()}
      </ScrollView>
      <BottomTab />
    </View>
  );
};

export default SecondScreen;
