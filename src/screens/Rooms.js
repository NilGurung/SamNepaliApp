import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
import RoomList from '../components/room/RoomList';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingLeft: 10,
    },
})
                  
class Rooms extends Component {
    
    constructor(props) {
        super(props);
        
        // Bind the this context to the handler function
        this.setAddButtonStatus = this.setAddButtonStatus.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        // Set some state
        this.state = {
            addViewClicked: false
        };
    }

    onNavigatorEvent = event => {
        if(event.type === "NavBarButtonPress") {
            if(event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                    
                  });
            }
        }
    }

    setAddButtonStatus() {
        this.props.navigator.push({
            screen: 'neil.AddScreen',
            title: 'Add a New Room',
            animated: true, // does the push have transition animation or does it happen immediately (optional)
            animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
        })
    }

    // componentWillMount() {
    //     this.props.loadInitialContacts();
    // }



    render() { 
        return (
          <View style={styles.container}>
            <RoomList onPress={this.setAddButtonStatus.bind(this)}/>
          </View>
        );
      }
}

export default Rooms;