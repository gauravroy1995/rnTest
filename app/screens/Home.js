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
import {saveIndex} from '../redux/actions/userAction';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomeScreen extends React.Component {
  onSlotPress = index => {
    this.props.saveIndex(index);
    this.props.navigation.navigate('FirstScreen');
  };

  //display each user
  displayUser = (item, index, props) => {
    return (
      <Pressable
        style={
          item.isBooked ? homeScreenStyle.cardBooked : homeScreenStyle.card
        }
        onPress={() => this.onSlotPress(index)}>
        <View>
          <Text style={homeScreenStyle.nameT}>{item.slot}</Text>
          {/* <Text style={homeScreenStyle.nameSecon}>{item.tz}</Text> */}
        </View>
        <Image
          source={require('../assets/images/account.png')}
          style={homeScreenStyle.img}
          resizeMode="contain"
        />
      </Pressable>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.userReducer.timeSlotArray}
          renderItem={({item, index}) => this.displayUser(item, index)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {userReducer} = state;
  return {userReducer};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveIndex,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
