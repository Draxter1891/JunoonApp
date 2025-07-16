import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { interpolate } from 'react-native-reanimated';
import Carousel, { TAnimationStyle } from 'react-native-reanimated-carousel';
import { width } from '../constants/Sizes';
import { imageData } from '../constants/imageData';

const CustomCarousel = () => {
  const animationStyle: TAnimationStyle = useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-2, 0, 2], [10, 20, 30]);
    const scale = interpolate(value, [-2, 0, 2], [2.5, 1, 0.4]);
    const opacity = interpolate(value, [-1.5, 0, 2], [0, 1, 0]);

    return {
      transform: [{ scale }],
      zIndex,
      opacity,
    };
  }, []);

  const renderItem = ({ item }: { item: imageData }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: item.imgUri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
  return (
    <Carousel
      loop
      style={{
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0e5e6ff',
        opacity: 0.3,
      }}
      autoPlay
      width={width}
      height={200}
      data={imageData.slice(0,3)}
      renderItem={renderItem}
      customAnimation={animationStyle}
    />
  );
};

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
});
