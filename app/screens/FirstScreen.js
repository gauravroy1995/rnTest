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
      activities: [],
      activitiesDisplayed: [],
      routeData: {},
      dateF: new Date(2020, 0, 1, 0, 0),
      dateEnd: new Date(2020, 11, 31, 0, 0),
      displayedDate: moment(),
    };
  }
  componentDidMount() {
    this.setState({
      activities: this.props.route.params.dataItem.activity_periods,
      routeData: this.props.route.params.dataItem,
      activitiesDisplayed: this.props.route.params.dataItem.activity_periods,
    });
  }

  calculateDate = (firstD, secondD) => {
    let secondPart = secondD.split(' ');
    let newD = `${firstD}-${secondPart[3]}`;
    return newD;
  };
  // rendering each item in flatistt
  displayEachDate = (datePassed, index) => {
    return (
      <View key={index}>
        <Text style={firstScreenStyles.rightT23}>
          {this.calculateDate(datePassed.start_time, datePassed.end_time)}
        </Text>
      </View>
    );
  };

  // for rendering date data
  dateFlatList = () => {
    return (
      <FlatList
        data={this.state.activitiesDisplayed}
        renderItem={({item, index}) => this.displayEachDate(item, index)}
      />
    );
  };

  // func to open both modals
  openModal = type => {
    this.setState({
      [type]: true,
    });
  };

  // card componentfor user details
  renderCard = () => {
    const {routeData, dateF, dateEnd} = this.state;
    return (
      <View style={firstScreenStyles.cards}>
        <View style={firstScreenStyles.headlIn}>
          <Text style={firstScreenStyles.headLi}>User Details </Text>
        </View>
        <View style={firstScreenStyles.horiZ}>
          <Text style={firstScreenStyles.textId}>ID:</Text>
          <Text style={firstScreenStyles.rightT}>{routeData.id}</Text>
        </View>
        <View style={firstScreenStyles.horiZ}>
          <Text style={firstScreenStyles.textId}>TimeZone:</Text>
          <Text style={firstScreenStyles.rightT}>{routeData.tz}</Text>
        </View>
        <View style={firstScreenStyles.horiZNw}>
          <Text style={firstScreenStyles.textId}>Activity Periods :</Text>
          {this.dateFlatList()}
        </View>

        <View>
          <Text style={firstScreenStyles.tetxHead}>
            You are viewing the above activities from :
          </Text>
          <Text style={firstScreenStyles.tetxHead}>
            {dateF.toDateString().substring(4)} to{' '}
            {dateEnd.toDateString().substring(4)}
          </Text>
          <Text style={firstScreenStyles.tetxHead2}>
            You can select the start and the end dates below:
          </Text>
        </View>
        <View style={firstScreenStyles.botmS}>
          <BottonButtons
            onPress={() => this.openModal('showFirstDate')}
            title="Select Start Date"
          />
          <BottonButtons
            onPress={() => this.openModal('showSecondDate')}
            title="Select End Date"
          />
        </View>
      </View>
    );
  };

  // handler for onstart date pick
  onChangeFirstDate = (event, selectedDate) => {
    const {activities, dateEnd} = this.state;
    const currentDate = selectedDate || this.state.dateF;
    let newActi = [];
    for (let i = 0; i < activities.length; i++) {
      let month = getMonthInd(activities[i].start_time.split(' ')[0]);
      let year = activities[i].start_time.split(' ')[2];
      let dateS = activities[i].start_time.split(' ')[1];
      let dateActivi = new Date(year, month, dateS, 0, 0);
      if (dateActivi > selectedDate && dateActivi < dateEnd) {
        newActi.push(activities[i]);
      }
    }
    this.setState({
      dateF: currentDate,
      showFirstDate: false,
      showSecondDate: false,
      activitiesDisplayed: newActi,
    });
  };

  // handler for onend date pick
  onChangeSecondDate = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.dateF;
    const {activities, dateEnd, dateF} = this.state;

    let newActi = [];
    for (let i = 0; i < activities.length; i++) {
      let month = getMonthInd(activities[i].start_time.split(' ')[0]);
      let year = activities[i].start_time.split(' ')[2];
      let dateS = activities[i].start_time.split(' ')[1];
      let dateActivi = new Date(year, month, dateS, 0, 0);
      if (dateActivi < selectedDate && dateActivi > dateF) {
        newActi.push(activities[i]);
      }
    }
    this.setState({
      dateEnd: currentDate,
      showFirstDate: false,
      showSecondDate: false,
      activitiesDisplayed: newActi,
    });
  };

  render() {
    const {
      dateF,
      displayedDate,
      showFirstDate,
      showSecondDate,
      dateEnd,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        {this.renderCard()}
        {showFirstDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateF}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={this.onChangeFirstDate}
          />
        )}
        {showSecondDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateEnd}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={this.onChangeSecondDate}
          />
        )}
      </View>
    );
  }
}

export default FirstScreen;
