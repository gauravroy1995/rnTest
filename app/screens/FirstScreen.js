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
import {Header, BottomTab, BottonButtons} from '../components/globalComponents';
import {firstScreenStyles} from '../style/firstScreenStyle';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {getMonthInd} from '../functions/globalFunctions';

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
  }

  onTextCHange = (text, type) => {
    this.setState({
      [type]: text,
    });
  };

  render() {
    const {phone, name} = this.state;
    return (
      <View style={{flex: 1}}>
        <Text>Hey</Text>
        <TextInput
          placeholder="Enter name"
          value={name}
          onChangeText={text => this.onTextCHange(text, 'name')}
        />
        <TextInput
          placeholder="Enter phone"
          value={phone}
          onChangeText={text => this.onTextCHange(text, 'phone')}
        />
      </View>
    );
  }
}

export default FirstScreen;
