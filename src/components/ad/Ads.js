import React, {Component} from 'react';
import { StyleSheet, View, ListView} from 'react-native';
import rooms from '../../reducers/room.json';
import Ad from './Ad';
import FloatButton from '../common/FloatButton';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 10,
    },
})

export default class Ads extends Component {

    componentWillMount() {
        //this.props.loadInitialContacts();
    }

    // load rooms lists
    loadDummyData() {
        return rooms
    }

    //open the add rooms
    // addNewRoom(props) {
    //     this.props.addViewClicked = true;
    //     console.log(this.props.addViewClicked);
    // }

    render() {
        
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.loadDummyData())
        return (
            <View style={styles.container} >
               <ListView
                    enableEmptySections={true}
                    dataSource = {this.dataSource}
                    renderRow = {
                        (rowData) => 
                            <Ad ad={rowData} />
                        }
                />
                 <FloatButton style={{resizeMode: 'contain',}} onPress={this.props.onPress} />
            </View>
        )
    }
}