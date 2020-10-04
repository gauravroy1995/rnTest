import * as React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = props => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Button
        title="Navigate to First"
        onPress={() => props.navigation.navigate('FirstScreen')}
      />
      <Button
        title="Navigate to Second "
        onPress={() => props.navigation.navigate('SecondScreen')}
      />
    </View>
  );
};

export default HomeScreen;
