import React,{useCallback} from 'react';
import { Dimensions, View } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import Carousel, { TAnimationStyle } from 'react-native-reanimated-carousel';

import CardItem from './CardItem';
import { height, width } from '../constants/Sizes';



const CustomCarousel = () => {
  const animationStyle: TAnimationStyle = useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [2, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }],
      zIndex,
      opacity,
    };
  }, []);

  return (
      <Carousel
        loop
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#f0e5e6ff',
          marginBottom:20
        }}
        autoPlay
        width={width}
        height={200}
        data={[...new Array(6).keys()]}
        renderItem={({ index }) => {
          return <CardItem key={index} index={index} />;
        }}
        customAnimation={animationStyle}
      />
  );
}

export default CustomCarousel;
