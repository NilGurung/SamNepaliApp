import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MKButton} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  TouchableOpacityStyle:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
});
// colored button with default theme (configurable)

const ColoredRaisedButton = MKButton.coloredFab()
.withStyle(styles.fab)
.build();


const FloatButton = () => {
    return(
            <ColoredRaisedButton style={[styles.TouchableOpacityStyle]} >
                <Image pointerEvents="none" source={require('../../images/plus_white.png')}  style={styles.FloatingButtonStyle}/>
             </ColoredRaisedButton>

    ) 
}

export default FloatButton;