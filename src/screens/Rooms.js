import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
//import AdItem from './AdItem';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RoomList from '../components/room/RoomList';
///import AdDetail from './AdDetail';
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
                  
class Rooms extends Component {

    
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
        console.log(props);
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

    // componentWillMount() {
    //     this.props.loadInitialContacts();
    // }

    renderInitialView() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.props.people)
        if(this.props.detailsView === true) {
            return (
                <RoomDetail />
            );
        } else {
            return (
            <ListView
                    enableEmptySections={true}
                    dataSource = {this.dataSource}
                    renderRow = {
                        (rowData) => 
                            <RoomItem job={rowData} />
                        }
                />
                )
        }
    }


    render() {
        return (
          <View style={styles.container}>
            {/* {this.renderInitialView()} */}
            <RoomList />
          </View>
        );
      }
}

export default Rooms;