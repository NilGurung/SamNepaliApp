import React, {Component} from 'react';
import { StyleSheet, View, ListView, Text} from 'react-native';
import rooms from '../../../reducers/room.json';
import RoomItem from '../../room/RoomItem';
import {human} from 'react-native-typography';
import Carousel from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from '../../../styles/SliderEntry';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 10,
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
    }
})

export default class Feature extends Component {

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
        
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
        });
        this.dataSource = ds.cloneWithRows(this.loadDummyData())
        return (
            <View style={styles.exampleContainer} >
                <Text style={[human.title3, styles.title]}>Feature</Text>
                <Carousel
                  data={this.loadDummyData()}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  inactiveSlideScale={0.95}
                  inactiveSlideOpacity={1}
                  enableMomentum={true}
                  activeSlideAlignment={'start'}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  activeAnimationType={'spring'}
                  activeAnimationOptions={{
                      friction: 4,
                      tension: 40
                  }}
                />
            </View>
        )
    }
}