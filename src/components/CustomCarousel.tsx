import React,{useCallback} from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import Carousel, { TAnimationStyle } from 'react-native-reanimated-carousel';
import { height, width } from '../constants/Sizes';

type imageData = {
  imgUri:string;
}


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

  const imageData:imageData[] = [
      {
        imgUri: 'https://drive.google.com/uc?export=view&id=1xEYKVGCyg2ayL0rcr0cLadoMO5POwF6V'
      },
      {
        imgUri: 'https://drive.google.com/uc?export=view&id=1IhVsf_TDA1SDewRsMFcgZ2VFT1mv5yni'
      },
      {
        imgUri: 'https://drive.google.com/uc?export=view&id=1nssMeeKC19WmSFqnEEiUJbGjbFvphCQ7'
      },
    ]

    const renderItem = ({ item }:{item:imageData}) => (
        <View style={styles.item}>
          <Image
            source={{ uri: item.imgUri }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )
  return (
      <Carousel
        loop
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#f0e5e6ff',
          opacity:0.3,
        }}
        autoPlay
        width={width}
        height={200}
        data={imageData}
        renderItem={renderItem}
        customAnimation={animationStyle}
      />
  );
}

export default CustomCarousel;

const styles = StyleSheet.create({
   item: {
    width: width,
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
})