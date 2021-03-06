import React, {Component} from 'react';
import { StyleSheet, View, ListView} from 'react-native';

import RoomItem from './RoomItem';
import FloatButton from '../../components/common/FloatButton';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 10,
    },
})

export default class RoomList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //this.props.loadInitialContacts();
    }

   

  
    render() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.props.rooms)
        return (
            <View style={styles.container} >
               <ListView
                    enableEmptySections={true}
                    dataSource = {this.dataSource}
                    renderRow = {
                        (rowData) => 
                            <RoomItem room={rowData} />
                        }
                />

                 <FloatButton style={{resizeMode: 'contain',}} onPress={this.props.onPress}  />
            </View>
        )
    }
}