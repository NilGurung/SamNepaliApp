import React, {Component} from 'react';
import { StyleSheet,Image, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux'; 
import {getTheme} from 'react-native-material-kit'
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../../actions';

const theme = getTheme();

const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
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
  });
                  
class HomeDetail extends Component {
    handleClick = (link) => {
        Linking.canOpenURL(link).then(supported => {
            if(supported) {
                Linking.openURL(link);
            } else {
                console.log('Don\'t know how to open URI: ' + link);
            }
        })
    }
    
    render() {
        return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[theme.cardStyle, styles.card]}>
            <Image 
                source={require('../../images/background.jpg')}
                style={[theme.cardImageStyle, styles.image]}
            />
            <EvilIcon name={'user'} size={100} style={styles.icon}/>
           <TouchableOpacity style={styles.closeIcon}
                onPress={() => this.props.noneSelected()}
            >
                <Image 
                    source={require('../../images/close.png')}
                    />
           </TouchableOpacity>
            <Text style={[theme.cardTitleStyle, styles.title1]}>Home Details</Text> 
            <Text style={[theme.cardTitleStyle, styles.title2]}>from </Text>
            
            <View style={styles.editArea}>
                <TouchableOpacity style={styles.sections}
                onPress={() => {this.updateTest() }}>
                   <MaterialIcon name={'autorenew'} size={40} style={styles.editIcon}/>
                   <Text style={theme.cardContentStyle}>EDIT</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.sections}
                    onPress={() => { this.props.deleteContact(this.props.person.uid)}}>
                   <MaterialIcon name={'delete-forever'} size={40} style={styles.editIcon}/>
                   <Text style={theme.cardContentStyle}>DELETE</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.actionArea}>
                <TouchableOpacity
                    onPress={() => { this.handleClick(`tel:${this.props.person.phone}`)}}
                >
                    <Image source={require('../../images/call.png')} style={styles.actionImage}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.handleClick(`sms:${this.props.person.phone}`)}}
                >
                    <Image source={require('../../images/sms.png')} style={styles.actionImage}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.handleClick(`mailto:${this.props.person.email}`)}}
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
          </ScrollView>
        );
      }
}

export default HomeDetail;
