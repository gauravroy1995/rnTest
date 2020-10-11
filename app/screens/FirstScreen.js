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
import {showToaster} from '../components/toast';
import ImagePicker from 'react-native-image-crop-picker';

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

  onImagePick = async () => {
    ImagePicker.openPicker({
      multiple: true,
      cropping: false,
      mediaType: 'photo',
    })
      .then(images => {})
      .catch(err => {});
  };

  onPress = () => {
    const {timeSlotArray, userSelectedIndex} = this.props.userReducer;
    const {phone, name} = this.state;
    let isNameValid = false;
    let isPhoneValid = false;

    if (phone.trim()) {
      isPhoneValid = true;
    }

    if (name.trim()) {
      isNameValid = true;
    }

    if (isNameValid && isPhoneValid) {
      const existingArr = [...timeSlotArray];
      existingArr[userSelectedIndex] = {
        phone: phone,
        name: name,
        slot: timeSlotArray[userSelectedIndex].slot,
        isBooked: true,
      };

      this.props.saveSlotsArr(existingArr);
      this.props.navigation.goBack();
    } else {
      showToaster('Please enter a valid phone and name');
    }
  };

  render() {
    const {phone, name} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInputMod
          placeholder="Enter name"
          value={name}
          onChangeText={text => this.onTextCHange(text, 'name')}
          numeric={false}
        />
        <TextInputMod
          placeholder="Enter phone"
          value={phone}
          onChangeText={text => this.onTextCHange(text, 'phone')}
          numeric={true}
        />

        <BottonButtons title="Save Slot" onPress={this.onPress} />
        <View style={{height: 40}} />
        <BottonButtons title="Open Image selector" onPress={this.onImagePick} />
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
