import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import rooms from '../../../reducers/room.json';
import RoomItem from '../../room/RoomItem';
//import FloatButton from '../../components/common/FloatButton';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../../styles/SliderEntry';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 10,
    },
})

export default class Recent extends Component {

    componentWillMount() {
        //this.props.loadInitialContacts();
    }

    // load rooms lists
    loadDummyData() {
        return rooms
    }

   
    _renderItem = ({item}) => (
        <RoomItem room={item} />
      );

    render() {
        
   
        return (
            <View style={styles.container} >
                 <Text>Recent</Text>
                 <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.loadDummyData()}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                 />
              </View>
        )
    }
}