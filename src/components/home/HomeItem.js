import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: 'black',
         color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
      left: 0,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
    }
})

                    
const HomeItem = (props) =>  {
     return(
         <TouchableWithoutFeedback
            onPress = {() => {
                
            }}
            >
              <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={{ uri: '/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/background.jpg'}}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'user'}
                    size={100} 
                    style={styles.icon}
                />
                {/* <Text style={[theme.cardTitleStyle, styles.title]}>{props.home.first_name} {props.home.last_name}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.home.company}</Text> */}
                <Text>Home Details</Text>
            </View>
         </TouchableWithoutFeedback>
       )   
  
}


export default connect(null, actions)(HomeItem);