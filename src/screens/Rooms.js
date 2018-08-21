import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'; 
import _ from 'lodash';
//import AdItem from './AdItem';
//import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
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


    static navigationOptions = {
        tabBarLabel: 'Rooms',
        tabBarIcon: ({ tintColor }) =>
        <Icon name={'account-balance'} size={45}  color={tintColor} />
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
            <Text>Room</Text>
          </View>
        );
      }
}

export default Rooms;