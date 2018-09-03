import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
import Recent from '../components/home/recent/Recent';
import Feature from '../components/home/feature/Feature';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCarousel from '../components/home/Carousel/Carousel';
//import Icon from 'react-native- vector-icons/';
//import HomeDetails from '../components/home/HomeDetails';
//import { loadInitialContacts } from '../actions';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingLeft: 20,
    },
})
                  
class HomeScreen extends Component {

    

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress") {
            if(event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                    
                  });
            } 

            if (event.id === 'search') {
                Alert.alert('NavBar', 'Search button pressed');
            }
        }
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) =>
        <Icon name={'home'} size={45}  color={tintColor} />
    }

    componentDidMount() {
        this.props.navigator.setButtons({
            rightButtons: [
                {
                    title: 'Seach',
                    id: 'search'
                }
            ]
        })
    }


    loadImages() {
       return [
            {"src": "/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/1.jpeg"},
            {"src": "/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/2.jpeg"},
            {"src": "/Users/nilkanthagurung/Desktop/react-native-project/crm/src/images/3.jpeg"}
        ]
    }

  


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>Slider Component</Text>
                    <MyCarousel images={this.loadImages()}  />
                    <Recent />
                    <Feature />
                </View>
            </ScrollView>
        );
      }
}

// const mapStateToProps = state => {
//     const job = _.map(state.job, (val, uid) => {
//         return {...val, uid};
//     });
//     return { 
//         job,
//         detailsView: state.detailsView
//     };
// };

export default HomeScreen;
