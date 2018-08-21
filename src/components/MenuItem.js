import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/Ionicons';
const theme = getTheme();

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        height: 100,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 20,
        color: 'black',
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
        left: 10,
        color: 'black',
        backgroundColor: 'rgba(255,255,255,0)',
    }
})

                    
const MenuItem = (props) =>  {
    
     return(
         <TouchableWithoutFeedback
            onPress = {() => {
                
            }}
            >
              <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={{ uri: '/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/menu-bg@3x.png'}}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={props.menu.icon}
                    size={50} 
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.menu.title}</Text>
            </View>
         </TouchableWithoutFeedback>
       )   
  
}


export default MenuItem;