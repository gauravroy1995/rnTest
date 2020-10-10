import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Pressable,
  Platform,
  FlatList,
  TextInput,
} from 'react-native';
import {TextInputMod, BottonButtons} from '../components/globalComponents';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveSlotsArr} from '../redux/actions/userAction';

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
    };
  }
  componentDidMount() {
    // this.setState({});
    const {userSelectedIndex, timeSlotArray} = this.props.userReducer;
    let nameUser = timeSlotArray[userSelectedIndex].name;
    let phoneUser = timeSlotArray[userSelectedIndex].phone;
    this.setState({
      name: nameUser,
      phone: phoneUser,
    });
  }

  onTextCHange = (text, type) => {
    this.setState({
      [type]: text,
    });
  };

  onPress = () => {
    const {timeSlotArray, userSelectedIndex} = this.props.userReducer;
    const {phone, name} = this.state;
    const existingArr = [...timeSlotArray];
    existingArr[userSelectedIndex] = {
      phone: phone,
      name: name,
      slot: timeSlotArray[userSelectedIndex].slot,
      isBooked: true,
    };

    this.props.saveSlotsArr(existingArr);
  };

  render() {
    const {phone, name} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInputMod
          placeholder="Enter name"
          value={name}
          onChangeText={text => this.onTextCHange(text, 'name')}
        />
        <TextInputMod
          placeholder="Enter phone"
          value={phone}
          onChangeText={text => this.onTextCHange(text, 'phone')}
        />

        <BottonButtons title="Save Slot" onPress={this.onPress} />
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
      saveSlotsArr,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
