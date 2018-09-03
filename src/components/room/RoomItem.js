import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image , TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../../actions';

const theme = getTheme();

const styles = StyleSheet.create({
       card: {
        // marginTop: 10,
        // paddingBottom: 20,
        // marginBottom: 20,
        // borderColor: 'lightgrey',
        // borderWidth: 0.5,
        width: 400,
        backgroundColor: 'brown'
      },
      title1: {
          top: 0,
          left: 5,
          padding: 10,
          fontSize: 24,
          color: 'white'
      },
      title2: {
          top: 35,
          left: 5,
          fontSize: 18,
          color: 'white'
      },
      image: {
        flex: 1,
        width: '100%', 
        height: '100%',
        resizeMode: 'contain',
        top: 10,
      },
      icon: {
          position: 'absolute',
          top: 15,
          left: 0,
          color: 'white',
          backgroundColor: 'rgba(255,255,255,0)',
      },
      textArea: {
          flexDirection: 'row',
          marginTop: 10,
          paddingLeft: 20,
          paddingTop: 20,
          width: '100%',
          color: 'white'
      },
      textIcons: {
          color: '#26a69a',
      },
      actionArea: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#B2A1A1',
          width: 400,
      },
      actionImage: {
          margin: 20,
          padding: 20,
          width: 35,
          height: 35,
      }
})

                    
const RoomItem = (props) =>  {
     return(
            <View style={[theme.cardStyle, styles.card]}>
                <ImageBackground
                    source={{ uri: '/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/card-bg@3x.png'}}
                    style={[theme.cardImageStyle, styles.image]}
                >
                <Text style={[theme.cardActionStyle, styles.title1]}>{props.room.title}</Text>
                <Text style={[theme.cardTitleStyle, styles.title2]}>{props.room.first_name} {props.room.last_name}</Text>
                <Text style={[theme.cardActionStyle, styles.textArea]}>{props.room.desc}</Text>
                <View style={styles.actionArea}>
                    <TouchableOpacity
                        onPress={() => { this.handleClick(`tel:${this.props.room.phone}`)}}
                    >
                        <Image source={require('../../images/call.png')} style={styles.actionImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.handleClick(`sms:${this.props.room.phone}`)}}
                    >
                        <Image source={require('../../images/sms.png')} style={styles.actionImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { this.handleClick(`mailto:${this.props.room.email}`)}}
                    >
                        <Image source={require('../../images/email.png')} style={styles.actionImage}/>
                    </TouchableOpacity>
                </View>
                
                </ImageBackground>
            </View>
            
        
       )   
  
}


//export default connect(null, actions)(RoomItem);
export default RoomItem;