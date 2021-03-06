import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../../styles/SliderEntry';
import styles, { colors } from '../../../styles/Index.style';
import {human} from 'react-native-typography';

 const { width } = Dimensions.get('window');
 const height = width * 0.6;
const SLIDER_1_FIRST_ITEM = 1;

export default class MyCarousel extends Component {

  _renderItem ({item, index}) {
    return (
        <View>
            <Image style={styles1.image} source={{uri: item.src}} />
            <Text style={[human.headline, styles.caption]}>{ item.title }</Text>
        </View>
    );
}

render () {
    const { slider1ActiveSlide } = 1;
    const { images } = this.props;

    return (
        <View style={styles.exampleContainer}>
            <Text style={human.title3}>Popular Announcements</Text>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={images}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              firstItem={SLIDER_1_FIRST_ITEM}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
            <Pagination
              dotsLength={images.length}
              activeDotIndex={slider1ActiveSlide}
              containerStyle={styles.paginationContainer}
              dotColor={'rgba(255, 255, 255, 0.92)'}
              dotStyle={styles.paginationDot}
              inactiveDotColor={colors.black}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this._slider1Ref}
              tappableDots={!!this._slider1Ref}
            />
        </View>
    );
}


}

const styles1 = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
  caption: {
     color: 'blue',
  }
});