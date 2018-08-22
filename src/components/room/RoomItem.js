import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 0.5,
      },
      title1: {
          top: 10,
          left: 80,
          fontSize: 24,
      },
      title2: {
          top: 35,
          left: 82,
          fontSize: 18,
      },
      image: {
          flex: 0,
          height: 100,
          width: 333,
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
      },
      closeIcon: {
          position: 'absolute',
          top: 5,
          left: 295,
          color: 'rgba(233,166,154,0.8)',
          backgroundColor: 'rgba(255,255,255,0)',
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
          paddingLeft: 20,
          paddingTop: 10,
          width: 260,
      },
      textIcons: {
          color: '#26a69a',
      },
      actionArea: {
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
      },
})

                    
const RoomItem = (props) =>  {
     return(
            <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={{ uri: '/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/card-bg.png'}}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.room.first_name} {props.room.last_name}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.room.title}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.room.desc}</Text>
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
                <View style={styles.actionArea}>
                    <Text>Call</Text>
                    <Text>SMS</Text>
                    <Text>Email</Text>
                </View>
            </View>
            
        
       )   
  
}


//export default connect(null, actions)(RoomItem);
export default RoomItem;