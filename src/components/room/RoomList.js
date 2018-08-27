import React, {Component} from 'react';
import { StyleSheet, View, ListView} from 'react-native';
import rooms from '../../reducers/room.json';
import RoomItem from './RoomItem';
import FloatButton from '../../components/common/FloatButton';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 20,
    },
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
})

export default class RoomList extends Component {

    

    componentWillMount() {
        //this.props.loadInitialContacts();
    }

    // load rooms lists
    loadDummyData() {
        return rooms
    }

    render() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.loadDummyData())
        return (
           
            <View style={styles.container}>
               <ListView
                    enableEmptySections={true}
                    dataSource = {this.dataSource}
                    renderRow = {
                        (rowData) => 
                            <RoomItem room={rowData} />
                        }
                />
                 <FloatButton style={{resizeMode: 'contain',}}/>
            </View>
        )
    }
}