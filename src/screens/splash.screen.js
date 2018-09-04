import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class SplashScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    self = this;
    setTimeout(() => {
      self.props.navigator.showModal({
        screen: "neil.EntryScreen",
    })
    }, 1000)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Image style={{flex: 1, width: null, height: null}} source={'/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/splash.jpg'}/>
      </View>
    )
  }
  
} 