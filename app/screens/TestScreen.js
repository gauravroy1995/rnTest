import React from 'react';
import {FlatList, View, Text, TextInput, Image, StyleSheet} from 'react-native';

export default class TestScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flatListData: this.dummyData,
      textSearched: '',
    };
  }

  dummyData = [
    {
      url: 'https://source.unsplash.com/random',
      name: 'iniesta',
      location: 'india',
    },
    {
      url: 'https://source.unsplash.com/random',
      name: 'messi',
      location: 'afghanistan',
    },
    {
      url: 'https://source.unsplash.com/random',
      name: 'arteta',
      location: 'china',
    },
    {
      url: 'https://source.unsplash.com/random',
      name: 'ozil',
      location: 'russia',
    },
    {
      url: 'https://source.unsplash.com/random',
      name: 'wuhan',
      location: 'germany',
    },
  ];

  renderEachImage = (image, index) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: image.url}}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Text>{image.name}</Text>
        <Text>{image.location}</Text>
      </View>
    );
  };

  renderImagesFlatlist = () => {
    return (
      <FlatList
        data={this.state.flatListData}
        renderItem={({item, index}) => this.renderEachImage(item, index)}
      />
    );
  };

  onTextSearched = text => {
    let staticImages = [];

    for (let i = 0; i < this.dummyData.length; i++) {
      if (
        this.dummyData[i].name.includes(text.toLowerCase()) ||
        this.dummyData[i].location.includes(text.toLowerCase())
      ) {
        staticImages.push(this.dummyData[i]);
      }
    }

    this.setState({
      flatListData: staticImages,
    });
  };

  renderTextInput = () => {
    return (
      <TextInput
        placeholder="Search for image"
        onChangeText={text => this.onTextSearched(text)}
      />
    );
  };

  render() {
    return (
      <View style={{flex: 1, marginHorizontal: 10}}>
        {this.renderTextInput()}
        {this.renderImagesFlatlist()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: '100%',
    // marginHorizontal: 20,
    marginVertical: 10,
  },
});
