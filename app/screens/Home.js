import * as React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import {staticData} from '../assets/staticJson/testData';
import {homeScreenStyle} from '../style/homeScreenStyle';

//display each user
const displayUser = (item, index, props) => {
  return (
    <Pressable
      style={homeScreenStyle.card}
      onPress={() =>
        props.navigation.navigate('FirstScreen', {
          itemIndex: index,
          dataItem: item,
          name: item.real_name,
        })
      }>
      <View>
        <Text style={homeScreenStyle.nameT}>{item.real_name}</Text>
        <Text style={homeScreenStyle.nameSecon}>{item.tz}</Text>
      </View>
      <Image
        source={require('../assets/images/account.png')}
        style={homeScreenStyle.img}
        resizeMode="contain"
      />
    </Pressable>
  );
};

const HomeScreen = props => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={staticData.members}
        renderItem={({item, index}) => displayUser(item, index, props)}
      />
    </View>
  );
};

export default HomeScreen;
